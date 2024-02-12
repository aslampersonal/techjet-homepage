import React from "react";

const sizeClasses = {
  txtCloserTextMedium32: "font-closertext font-medium",
  txtCloserTextRegular24: "font-closertext font-normal",
  txtCloserTextRegular28: "font-closertext font-normal",
  txtCloserTextBold24: "font-bold font-closertext",
  txtCloserTextMedium38: "font-closertext font-medium",
  txtCloserTextMedium16: "font-closertext font-medium",
  txtCloserTextRegular24Gray600: "font-closertext font-normal",
  txtCloserTextRegular1991: "font-closertext font-normal",
  txtCloserTextRegular24Gray900: "font-closertext font-normal",
  txtCloserTextRegular24WhiteA70001: "font-closertext font-normal",
  txtCloserTextSemiBold28: "font-closertext font-semibold",
  txtCloserTextMedium20: "font-closertext font-medium",
  txtInterMedium18: "font-inter font-medium",
  txtCloserTextRegular32: "font-closertext font-normal",
  txtCloserTextMedium24: "font-closertext font-medium",
  txtCloserTextRegular16: "font-closertext font-normal",
  txtCloserTextBold28: "font-bold font-closertext",
  txtCloserTextMedium48WhiteA70001: "font-closertext font-medium",
  txtCloserTextMedium32Black900: "font-closertext font-medium",
  txtInterMedium1367: "font-inter font-medium",
  txtCloserTextSemiBold1991: "font-closertext font-semibold",
  txtCloserTextSemiBold60: "font-closertext font-semibold",
  txtCloserTextMedium48: "font-closertext font-medium",
  txtCloserTextSemiBold20: "font-closertext font-semibold",
  txtCloserTextMedium28: "font-closertext font-medium",
  txtInterSemiBold1367: "font-inter font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
