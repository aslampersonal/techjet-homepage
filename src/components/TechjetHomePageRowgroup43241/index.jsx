import React from "react";

import { Img, Text } from "components";

const TechjetHomePageRowgroup43241 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[185px] md:h-auto mb-[27px] object-cover"
          src="images/img_group43241.png"
          alt="group43241"
        />
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[27px] p-[30px] sm:px-5 rounded-[16px] shadow-bs">
          <div className="flex flex-col gap-[17px] justify-start w-[99%] md:w-full">
            <div className="flex flex-row gap-[17px] items-center justify-start w-[35%] md:w-full">
              <Img
                className="h-10"
                src="images/img_group43264.svg"
                alt="group43264"
              />
              <Text
                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-red-800"
                size="txtCloserTextMedium28"
              >
                {props?.dynamicproperty2}
              </Text>
            </div>
            <Text
              className="capitalize md:ml-[0] ml-[74px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-[84%] sm:w-full"
              size="txtCloserTextMedium24"
            >
              {props?.dynamicproperty3}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageRowgroup43241.defaultProps = {
  dynamicproperty2: "$20M",
  dynamicproperty3:
    "Annual additional revenue from personalized repeat business",
};

export default TechjetHomePageRowgroup43241;
