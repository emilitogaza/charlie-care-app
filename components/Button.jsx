import React from "react";
import classNames from "classnames";
import "../styles/Buttons.scss";
import AddHomeScreen from "../src/assets/AddHomeScreen";
import ArrowLeft from "../src/assets/ArrowBackward";
import ArrowRight from "../src/assets/ArrowForward";

function Button({
  type = "button",
  variant,
  className,
  id,
  onClick,
  children,
  icon = null,
  iconPosition = "left",
  ...otherProps
}) {
  const iconComponents = {
    AddHomeScreen: <AddHomeScreen {...otherProps} />,
    ArrowLeft: <ArrowLeft {...otherProps} />,
    ArrowRight: <ArrowRight {...otherProps} />,
  };

  const iconLeft = icon && iconPosition === "left";
  const iconRight = icon && iconPosition === "right";

  const buttonClass = classNames(
    variant,
    {
      "icon-left": iconLeft,
      "icon-right": iconRight,
    },
    className
  );

  const SelectedIcon = iconComponents[icon];

  return (
    <div type={type} className={buttonClass} id={id} onClick={onClick}>
      {iconLeft && SelectedIcon}
      {children}
      {iconRight && SelectedIcon}
    </div>
  );
}

export default Button;
