import Modal from "../../UI/Modal";
import BTcarosuel from "./BTcarousel";
import classes from "./Details.module.css";

const Details = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Modal>
      {props.children}

      <h3> {props.name} </h3>
      
      <div className={classes.description}> {props.description} </div>
      <div className={classes.price}> {price} </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideDetails}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Details;
