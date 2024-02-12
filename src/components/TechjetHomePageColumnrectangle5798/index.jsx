import React from "react";

import { Img, Text } from "components";

const TechjetHomePageColumnrectangle5798 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[263px] md:h-auto object-cover rounded-[11px] w-full"
          alt="rectangle5798"
          src={props?.rectangle5798}
        />
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
            size="txtCloserTextSemiBold28"
          >
            {props?.fortune}
          </Text>
          <div className="bg-gradient  flex flex-col items-center justify-end p-2.5 rounded-[16px]">
            <Img
              className="h-[26px] w-[26px]"
              src="images/img_redoarrow.svg"
              alt="redoarrow"
            />
          </div>
        </div>
        <Text
          className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
          size="txtCloserTextRegular24"
        >
          {props?.description}
        </Text>
      </div>
    </>
  );
};

TechjetHomePageColumnrectangle5798.defaultProps = {
  rectangle5798: "images/img_rectangle5798.png",
  fortune: "Fortune",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum..........",
};

export default TechjetHomePageColumnrectangle5798;
