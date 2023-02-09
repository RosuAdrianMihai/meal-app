import { MEALS as meals } from "../data/dummy-data";

import MealList from "../components/MealList/MealList";

function MealsOverview({ route }) {
  const data = route.params;

  const listOfMeals = meals.filter((meal) => {
    if (meal.categoryIds.includes(data.id)) {
      return meal;
    }
  });
  return <MealList listOfMeals={listOfMeals} />;
}

export default MealsOverview;
