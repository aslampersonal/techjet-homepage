import React from "react";

import { Img, Text } from "components";

const TechjetHomePageRowuser = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[185px] md:h-auto mb-[27px] object-cover"
          src="images/img_group43241.png"
          alt="group43241"
        />
        <div className="bg-white-A700 flex flex-col items-center justify-start mb-[27px] p-[26px] sm:px-5 rounded-[16px] shadow-bs">
          <div className="flex flex-col gap-[11px] justify-start mb-[5px] w-[99%] md:w-full">
            <div className="flex flex-row gap-5 items-center justify-start w-[32%] md:w-full">
              <Img className="h-[52px]" src="images/img_user.svg" alt="user" />
              <Text
                className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-red-800"
                size="txtCloserTextMedium28"
              >
                {props?.distancetext}
              </Text>
            </div>
            <Text
              className="capitalize md:ml-[0] ml-[78px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-[84%] sm:w-full"
              size="txtCloserTextMedium24"
            >
              {props?.descriptiontext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageRowuser.defaultProps = {
  distancetext: "30M",
  descriptiontext:
    "Driving repeat business for 30M unique consumers and counting",
};

export default TechjetHomePageRowuser;
