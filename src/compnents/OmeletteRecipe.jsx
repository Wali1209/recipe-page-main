import React from "react";

import OmeleteImg from "../assets/images/image-omelette.jpeg";
export const OmeletteRecipe = () => {
  return (
    <main className="recipe-page">
      {/* banner starts from here */}
      <div className="banner">
        <img src={OmeleteImg} alt="OmeletteImgMain" className="banner-img" />
        <div className="banner-text">
          <h1 className="main-heading">Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
      </div>

      {/* preparation time */}
      <div className="preparation-time">
        <span>Preparation time</span>
        <ul className="preparation-time-list">
          <li>
            <b> Total: </b>
            Approximately 10 minutes
          </li>
          <li>
            <b>Preparation: </b>5 minutes
          </li>
          <li>
            <b>Cooking: </b>5 minutes
          </li>
        </ul>
      </div>

      {/* Ingredients */}
      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul className="ingredients-list">
          <li>2-3 large eggs</li>
          <li>Salt, to taste</li>
          <li>Pepper, to taste</li>
          <li>1 tablespoon of butter or oil</li>
          <li>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </li>
        </ul>
      </div>

      {/* instructions */}
      <div className="instructions">
        <h3>Instructions</h3>
        <ol>
          <li>
            <p>
              <b> Beat the eggs: </b>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </p>
          </li>
          <li>
            <p>
              <b>Heat the pan: </b>
              Place a non-stick frying pan over medium heat and add butter or
              oil.
            </p>
          </li>
          <li>
            <p>
              <b>Cook the omelette: </b>
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </p>
          </li>
          <li>
            <p>
              <b>Add fillings (optional): </b>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </p>
          </li>
          <li>
            <p>
              <b> Fold and serve: </b>
              As the omelette continues to cook, carefully lift one edge and
              fold it over the fillings. Let it cook for another minute, then
              slide it onto a plate.
            </p>
          </li>
          <li>
            <p>
              <b> Enjoy: </b>
              Serve hot, with additional salt and pepper if needed.
            </p>
          </li>
        </ol>
      </div>

      {/* nutrition */}
      <div className="nutrition">
        <h3>Nutrition</h3>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <table className="nutrition-table">
          <tbody>
            <tr>
              <td> Calories</td>
              <td>277kcal</td>
            </tr>
            <tr>
              <td>Carbs</td>
              <td> 0g</td>
            </tr>
            <tr>
              <td> Protein</td>
              <td>20g</td>
            </tr>
            <tr>
              <td> Fat</td>
              <td>22g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};
