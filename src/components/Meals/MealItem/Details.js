import Modal from "../../UI/Modal";
import classes from "./Details.module.css";
import BTcarosuel from "./BTcarousel";

const Details = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <Modal>
      {props.children}

      <h3> {props.name} </h3>
      
      <div className={classes.description}> {props.description} </div>
      <div className={classes.price}> {price} </div>
      <div  className={classes['main-image']}> <BTcarosuel /> </div>
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
