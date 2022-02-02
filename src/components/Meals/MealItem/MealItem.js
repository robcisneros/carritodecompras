import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import Details from "./Details";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [detailsIsShown, setDetailsIsShown] = useState(false);
  const price = `$${props.price.toFixed(2)}`;

  const showDetailsHandler = () => {
    setDetailsIsShown(true);
  };
  const hiddenDetailsHandler = () => {
    setDetailsIsShown(false);
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <React.Fragment>
      {detailsIsShown && (
        <Details
          key={props.id}
          id={props.id}
          name={props.name}
          description={props.description}
          price={props.price}
          onHideDetails={hiddenDetailsHandler}
        />
      )}
      <li className={classes.meal}>
        <div className={classes.enhover} onClick={showDetailsHandler}>
          <h3> {props.name} </h3>
          <div className={classes.description}> {props.description} </div>
          <div className={classes.price}> {price} </div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />{" "}
        </div>
      </li>
    </React.Fragment>
  );
};

export default MealItem;
