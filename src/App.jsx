import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  useMemo(() => filterRecipesComputeIntensive, []);

  useEffect(() => {
    fetch("https://api.sampleapis.com/recipes/recipes")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecipes(data);
      });
    return () => console.log("unmounted");
  }, []);
  function filterRecipesComputeIntensive() {
    const now = performance.now();
    while (performance.now() - now < 8000) {
      //spin()
    }
    return recipes.filter((word) => word.name.split(" ").length <= 4);
  }
  function deleteFromArray(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  // const filteredRecipes = filterRecipesComputeIntensive(recipes);
  return (
    <>
      <Navbar />
      {recipes.map((data) => (
        <RecipeContainer
          recipe={data}
          key={data.id}
          deleteFromArray={deleteFromArray}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
