import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  gradient: { red_300_yellow_900: "bg-gradient  text-white-A700_01" },
  fill: {
    white_A700_01: "bg-white-A700_01 text-black-900",
    amber_500: "bg-amber-500",
    gray_50_26: "bg-gray-50_26",
    gray_100_02: "bg-gray-100_02",
    orange_100: "bg-orange-100",
  },
};
const sizes = { xs: "p-2", sm: "p-[11px]", md: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["gradient", "fill"]),
  color: PropTypes.oneOf([
    "red_300_yellow_900",
    "white_A700_01",
    "amber_500",
    "gray_50_26",
    "gray_100_02",
    "orange_100",
  ]),
};

export { Button };
