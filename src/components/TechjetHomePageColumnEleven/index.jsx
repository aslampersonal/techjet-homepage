import React from "react";

import { Img, Text } from "components";

const TechjetHomePageColumnEleven = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[15px] items-start justify-start w-full">
          <Text
            className="text-white-A700_01 text-xl"
            size="txtCloserTextSemiBold20"
          >
            {props?.contactinformat}
          </Text>
          <div className="flex flex-row items-start justify-between w-full">
            <Img className="h-5" src="images/img_facebook.svg" alt="facebook" />
            <Img
              className="h-[21px] w-[21px]"
              src="images/img_info.svg"
              alt="info"
            />
            <Img className="h-[19px]" src="images/img_trash.svg" alt="trash" />
            <Img
              className="h-5 w-[21px]"
              src="images/img_link.svg"
              alt="link"
            />
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageColumnEleven.defaultProps = { contactinformat: "Follow Us" };

export default TechjetHomePageColumnEleven;
