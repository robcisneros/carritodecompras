import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React, { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformMeals = (data) => {
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }

      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-http-5cc8c-default-rtdb.firebaseio.com/meals.json/",
      },
      transformMeals
    );
  }, [fetchMeals]);

  let content = <p>Found no meals.</p>;

  if (meals.length > 0) {
    content = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }
  if (error) {
    content = <p> {error} </p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{content}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
