import React from "react";

import { Img, Text } from "components";

const TechjetHomePageRow4b = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[185px] md:h-auto mb-[27px] object-cover"
          src="images/img_group43241.png"
          alt="group43241"
        />
        <div className="bg-white-A700 flex flex-col items-start justify-start mb-[27px] p-[30px] sm:px-5 rounded-[16px] shadow-bs w-[96%] sm:w-full">
          <div className="flex flex-col gap-[15px] justify-start mb-[31px] w-[64%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-[36%] md:w-full">
              <Img
                className="h-[46px]"
                src="images/img_group43264_red_800.svg"
                alt="group43264"
              />
              <Text
                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-red-800"
                size="txtCloserTextMedium28"
              >
                {props?.text4b}
              </Text>
            </div>
            <Text
              className="capitalize md:ml-[0] ml-[57px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
              size="txtCloserTextMedium24"
            >
              {props?.textpersonalizedupsells}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageRow4b.defaultProps = {
  text4b: "4B",
  textpersonalizedupsells: "Personalized upsells",
};

export default TechjetHomePageRow4b;
