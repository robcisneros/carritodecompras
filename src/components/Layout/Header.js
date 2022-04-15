import { Fragment } from "react";
import classes from "./Header.module.css";
import frontImage from "../../assets/surgery-room-1-compressed.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Medical Shop</h1>
            <HeaderCartButton onClick={props.onShowCart} ></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={frontImage} alt='A table full of delicious food'></img>
        </div>
    </Fragment>
};

export default Header;