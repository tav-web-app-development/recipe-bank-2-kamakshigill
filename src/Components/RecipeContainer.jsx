import { useState } from "react";

/* eslint-disable react/prop-types */
function RecipeContainer({ recipe, deleteFromArray }) {
  const [editButton, setEditButton] = useState(true);
  const editText = editButton ? "Edit" : "Save";
  const [insertRecipe, setInsertRecipe] = useState(recipe);

  // Disable ESLint for unused function deleteButton
  // eslint-disable-next-line no-unused-vars
  function deleteButton(id) {
    document.getElementById(id).remove();
  }
  function handleChange(e, key) {
    setInsertRecipe({ ...insertRecipe, [key]: e.target.value });
  }

  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = recipe.title;
        }}
        id={recipe.id}
      >
        <div className="recipe">
          <h2>{recipe.title}</h2>
          <div>
            <button onClick={() => setEditButton(!editButton)}>
              {editText}
            </button>
            <button
            // eslint-disable-next-line no-unused-vars
              onClick={(e) => {
                deleteFromArray(insertRecipe.id);
              }}
            >
              Delete
            </button>
          </div>
          {editButton ? (
            <p>
              <strong>Description:</strong>
              {insertRecipe.description}
            </p>
          ) : (
            <>
              Description:{" "}
              <textarea
                rows={5}
                cols={75}
                type="text"
                defaultValue={insertRecipe.description}
                onChange={(e) => {
                  handleChange(e, "description");
                }}
              />
            </>
          )}
          <br />
          {editButton ? (
            <p>
              <strong>Ingredients:</strong> {insertRecipe.ingredients}
            </p>
          ) : (
            <>
              Ingredients:
              <textarea
                rows={5}
                cols={75}
                type="text"
                defaultValue={insertRecipe.ingredients}
                onChange={(e) => {
                  handleChange(e, "ingredients");
                }}
              />
            </>
          )}
          <br />
          {editButton ? (
            <p>
              <strong>Directions:</strong> {insertRecipe.directions}
            </p>
          ) : (
            <>
              Directions:
              <textarea
                rows={5}
                cols={75}
                type="text"
                defaultValue={insertRecipe.directions}
                onChange={(e) => {
                  handleChange(e, "directions");
                }}
              />
            </>
          )}
          <br />
          <img
            src={recipe.photoUrl}
            alt={recipe.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
