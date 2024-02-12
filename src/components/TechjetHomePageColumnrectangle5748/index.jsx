import React from "react";

import { Button, Img, Input, Text } from "components";

const TechjetHomePageColumnrectangle5748 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-[97%] md:w-full">
          <div className="flex flex-col items-start justify-start w-[68%] md:w-full">
            <div className="flex flex-row flex-wrap gap-8 items-start justify-start max-w-[1086px] w-full">
              <Button
                className="!text-black-900 cursor-pointer font-closertext leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-72"
                shape="round"
                color="amber_500"
                size="md"
                variant="fill"
              >
                {props?.personalisedOffers}
              </Button>
              <Button
                className="!text-black-900 border border-gray-400 border-solid cursor-pointer font-closertext leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[462px]"
                shape="round"
                color="gray_50_26"
                size="md"
                variant="fill"
              >
                {props?.loyaltyAndRewardsManagement}
              </Button>
              <Button
                className="!text-black-900 border border-gray-400 border-solid cursor-pointer font-closertext leading-[normal] text-2xl md:text-[22px] text-center sm:text-xl w-[272px]"
                shape="round"
                color="gray_50_26"
                size="md"
                variant="fill"
              >
                {props?.segmentation}
              </Button>
            </div>
            <Text
              className="capitalize mt-[98px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtCloserTextMedium32Black900"
            >
              {props?.leverageaifor}
            </Text>
            <Text
              className="capitalize leading-[36.00px] mt-7 text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[93%] sm:w-full"
              size="txtCloserTextRegular24"
            >
              {props?.descriptionSix}
            </Text>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-[43px] w-[37%] md:w-full">
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_check.svg"
                alt="check"
              />
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtCloserTextRegular24"
              >
                {props?.individualizedoOne}
              </Text>
            </div>
            <div className="flex flex-row gap-[15px] items-start justify-start mt-[25px] w-[35%] md:w-full">
              <Img
                className="h-[30px] mt-0.5 w-[30px]"
                src="images/img_check.svg"
                alt="check_One"
              />
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtCloserTextRegular24"
              >
                {props?.maximizerevenueOne}
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row gap-[15px] items-start justify-start mt-[27px] w-2/5 md:w-full">
              <Img
                className="h-[30px] sm:mt-0 mt-0.5 w-[30px]"
                src="images/img_check.svg"
                alt="check_Two"
              />
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtCloserTextRegular24"
              >
                {props?.enhancedcustomeOne}
              </Text>
            </div>
          </div>
          <div className="h-[564px] md:mt-0 mt-[26px] relative w-[31%] md:w-full">
            <div className="absolute h-[564px] inset-y-[0] my-auto right-[8%] w-[78%] sm:w-full">
              <div className="absolute bg-yellow-700 border-[5px] border-solid border-white-A700_01 bottom-[5%] h-[393px] inset-x-[0] mx-auto rounded-[10px] w-full"></div>
              <Img
                className="absolute h-[564px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_maskgroup.png"
                alt="maskgroup"
              />
            </div>
            <div className="absolute bg-white-A700_01 flex flex-col gap-[5px] items-center justify-start left-[0] p-[5px] rounded-[10px] shadow-bs1 top-[34%] w-1/4">
              <div className="bg-blue_gray-100_01 flex flex-col items-start justify-end p-[3px] rounded-md">
                <Text
                  className="capitalize ml-0.5 md:ml-[0] text-[13.67px] text-black-900 w-[64%] sm:w-full"
                  size="txtInterMedium1367"
                >
                  {props?.totaldisccount}
                </Text>
              </div>
              <Text
                className="bg-yellow-700 capitalize h-[27px] justify-center pl-1.5 sm:pr-5 pr-[35px] py-[5px] rounded-md text-[13.67px] text-black-900 w-[110px]"
                size="txtInterSemiBold1367"
              >
                {props?.groupone}
              </Text>
            </div>
            <div className="absolute bg-white-A700_01 bottom-[0] flex flex-col items-center justify-end p-2.5 right-[0] rounded-[10px] shadow-bs1 w-3/5">
              <div className="flex flex-col items-start justify-start w-[95%] md:w-full">
                <Text
                  className="capitalize text-[13.67px] text-black-900"
                  size="txtInterMedium1367"
                >
                  {props?.howwasyourexperOne}
                </Text>
                <div className="flex flex-row items-center justify-between mt-1 w-full">
                  <Input
                    name="emojislightly"
                    placeholder=""
                    className="p-0 w-full"
                    wrapClassName="flex h-[19px] rounded-[9px] w-[19px]"
                    suffix={
                      <Img
                        className="ml-1 my-auto"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    }
                    color="yellow_400"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_warning.svg"
                    alt="warning"
                  />
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_close.svg"
                    alt="close"
                  />
                  <Img
                    className="h-[23px]"
                    src="images/img_close_orange_400.svg"
                    alt="close_One"
                  />
                  <Img
                    className="h-[21px]"
                    src="images/img_thumbsup_yellow_400.svg"
                    alt="thumbsup_Five"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageColumnrectangle5748.defaultProps = {
  personalisedOffers: "Personalised Offers",
  loyaltyAndRewardsManagement: "Loyalty and Rewards Management",
  segmentation: "Segmentation",
  leverageaifor: "Leverage AI for effective Loyalty Management and Analytics.",
  descriptionSix:
    "Generic offers miss opportunities. Personalize your offers for optimal Conversions and Customer Satisfaction. Our AI-driven approach tailors offers to each customer, maximizing revenue and satisfaction.",
  individualizedoOne: "Individualized Offer Strategies",
  maximizerevenueOne: "Maximize Revenue Potential",
  enhancedcustomeOne: "Enhanced Customer Satisfaction",
  totaldisccount: "total disccount",
  groupone: "78%",
  howwasyourexperOne: "how was your experience?",
};

export default TechjetHomePageColumnrectangle5748;
