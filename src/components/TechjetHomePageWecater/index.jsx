import React, { useState } from "react";

import { Button, Img, List, Slider, Text } from "components";

const TechjetHomePageWecater = (props) => {

  const [sliderState, setsliderState] = useState(0);

  const scrollData = [
    {
      title: props.restaurant1,
      img: "images/img_rectangle_57251.png",
      desc: props.stepupyourdininOne,
    },
    {
      title: props.retail,
      img: "images/img_rectangle_57252.png",
      desc: props.elevateyourretaOne,
    },
    {
      title: props.ecommerce,
      img: "images/img_rectangle_57253.png",
      desc: props.boostecommerce,
    },
    {
      title: props.services,
      img: "images/img_rectangle_57254.png",
      desc: props.loremipsumdolorOne,
    },
  ];

  const handleArrowClicked = (direction) => {
    const maxIndex = scrollData.length - 1;

    if (direction === "left") {
      setsliderState((prevState) => Math.max(0, prevState - 1));
    } else if (direction === "right") {
      setsliderState((prevState) => Math.min(maxIndex, prevState + 1));
    }
  };

  return (
    <>
      <div className={props.className}>
        <div
          className="bg-cover bg-gradient5  bg-no-repeat flex flex-col h-[843px] items-end justify-center p-1 rounded-[16px] w-[41%] md:w-full"
          style={{ backgroundImage: `url('${scrollData[sliderState].img}')` }}
        >
          <div className="flex flex-col gap-10 justify-start mb-[239px] mt-[243px] w-[95%] md:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[39px]">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-white-A700_01"
                size="txtCloserTextMedium48WhiteA70001"
              >
                {scrollData[sliderState].title}
              </Text>
              <Text
                className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-white-A700_01 sm:text-xl w-full"
                size="txtCloserTextRegular24WhiteA70001"
              >
                {scrollData[sliderState].desc}
              </Text>
            </div>
            <Button
              className="capitalize cursor-pointer font-closertext font-medium leading-[normal] min-w-[200px] text-center text-xl"
              shape="round"
              size="sm"
              variant="gradient"
              color="red_300_yellow_900"
            >
              View All
            </Button>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-center justify-end pl-4 pt-4 w-[56%] md:w-full">
          <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start mt-[86px] overflow-hidden w-full">
            <div
              className="flex flex-row gap-8 overflow-scroll"
              style={{
                display: "flex",
                transition: "transform 0.5s ease",
                transform: `translateX(-${sliderState * 100/4}%)`,
              }}
            >
            {
              scrollData.map((data, index) => {
                return (
                <div key={index} className="bg-white-A700_01 flex flex-col items-center justify-end sm:ml-[0] p-4 rounded-[16px] shadow-bs3 w-full min-w-[30rem] md:min-w-[23rem] h-[40rem]">
                  <div className="flex flex-col items-start justify-start mt-[43px] w-[96%] md:w-full">
                    <Img
                        className="h-full w-full mb-4 md:mb-2"
                        src={data.img} 
                      />
                    <div className="flex flex-row gap-[26px] items-center justify-start w-3/5 md:w-full">
                      <Img
                        className="h-9"
                        src="images/img_printer.svg"
                        alt="printer"
                      />
                      <Text
                        className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-black-900 text-center"
                        size="txtCloserTextSemiBold28"
                      >
                        {data.title}
                      </Text>
                    </div>
                    <Text
                      className="capitalize leading-[36.00px] mt-[15px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                      size="txtCloserTextRegular24"
                    >
                      {data.desc}
                    </Text>
                    <div className="flex flex-row gap-[15px] items-start justify-start mt-6 pb-[5px] w-[56%] md:w-full">
                      <Text
                        className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900"
                        size="txtCloserTextRegular28"
                      >
                        Know More
                      </Text>
                      <Img
                        className="h-[33px] w-[33px]"
                        src="images/img_rightarrow.svg"
                        alt="rightarrow"
                      />
                    </div>
                  </div>
                </div>
                )
              })
            }
            </div>
            <div className="flex flex-row gap-8 items-center justify-start w-[12%] md:w-full">
              <Button
                className="border-2 border-orange-700 border-solid cursor-pointer flex h-[39px] items-center justify-center rounded-[19px] w-10"
                onClick={() => handleArrowClicked("left")}
                color="orange_100"
                size="xs"
                variant="fill"
              >
                <Img
                  src="images/img_arrowleft_orange_700.svg"
                  alt="arrowleft_One"
                />
              </Button>
              <Button
                className="border-2 border-orange-700 border-solid cursor-pointer flex h-[39px] items-center justify-center rounded-[19px] w-10"
                onClick={() => handleArrowClicked("right")}
                color="orange_100"
                size="xs"
                variant="fill"
              >
                <Img
                  src="images/img_arrowright_orange_700.svg"
                  alt="arrowright_One"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageWecater.defaultProps = {
  restaurant: "Restaurant",
  descriptionSeven:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  onviewallclick: "view all",
  restaurant1: "Restaurant",
  stepupyourdininOne:
    "Step up your dining game with Qubriux. Deliver personalized marketing, omnichannel campaigns.....",
  knowmore: "Know more",
  retail: "retail",
  elevateyourretaOne:
    "Elevate your retail experience with Qubriux, an AI-driven platform offering targeted campaigns, personalized.......",
  knowmore1: "Know more",
  ecommerce: "e-commerce",
  boostecommerce: "Boost e-commerce revenue with Qubriux&#39;s hyper-personalized marketing. Tailored for......",
  knowmore2: "Know more",
  services: "services",
  loremipsumdolorOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. Lorem ipsum dolor sit",
  knowmore3: "Know more",
};

export default TechjetHomePageWecater;
