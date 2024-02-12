import React, { useState } from "react";
import { Button, Img, Text } from "components";

const TechjetHomePageColumnSix = (props) => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      backgroundImage: "images/img_frame1331.png",
      text: props.textseven,
      description: props.texteight,
    },
    {
      backgroundImage: "images/img_frame1332.png",
      text: props.textnine,
      description: props.textten,
    },
    {
      backgroundImage: "images/img_frame1333.png",
      text: props.textthree,
      description: props.textfour,
    },
    {
      backgroundImage: "images/img_rectangle5751.png",
      text: props.textfive,
      description: props.textsix,
    },
    {
      backgroundImage: "images/img_frame1333_282x134.png",
      text: props.texteleven,
      description: props.texttwelve,
    },
  ];

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentSection((prevSection) =>
        prevSection === 0 ? 0 : prevSection - 1
      );
    } else if (direction === "right") {
      setCurrentSection((prevSection) =>
        prevSection === sections.length - 3 ? prevSection : prevSection + 1
      );
    }
  };

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start mt-7 w-full">
          <Text
            className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
            size="txtCloserTextMedium48"
          >
            {props?.textone}
          </Text>
          <Text
            className="capitalize mt-[26px] text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
            size="txtCloserTextRegular24Gray600"
          >
            {props?.texttwo}
          </Text>

          <div className="w-full flex flex-row justify-around mt-8">
            <div className="md:h-[477px] h-[420px] w-[50rem] flex justify-center items-center w-full md:hidden">
              <div
                className={`bg-cover bg-no-repeat flex flex-col gap-4 h-[282px] items-center justify-center rounded-[11px] shadow-bs2 px-4`}
                style={{ backgroundImage: `url(${sections[currentSection].backgroundImage})`, maxWidth: "500px" }}
              >
                <Text
                  className="capitalize mt-[109px] text-2xl md:text-[22px] text-white-A700_01 sm:text-xl w-[99%] sm:w-full"
                  size="txtCloserTextBold24"
                >
                  {sections[currentSection].text}
                </Text>
                <Text
                  className="capitalize leading-[24.00px] mb-[21px] text-lg text-white-A700_01 w-[98%] sm:w-full"
                  size="txtInterMedium18"
                >
                  {sections[currentSection].description}
                </Text>
              </div>
            </div>

            {/* center section */}
            <div className="md:h-[377px] h-[491px] relative w-[70rem] md:w-[90%]">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-3 pl-3">
                
                <div className="bg-gradient2 border border-gray-900_26 border-solid flex flex-col items-center justify-start pt-0.5 px-0.5 rounded-bl-[9px] rounded-br-[9px] rounded-tl-[20px] rounded-tr-[20px] w-[84%] md:w-full">
                  <div className="bg-gradient3 border border-gray-900_66 border-solid flex flex-col items-center justify-start pt-[3px] rounded-bl-[9px] rounded-br-[9px] rounded-tl-[20px] rounded-tr-[20px] w-full">
                    <div className="bg-black-900_02 flex flex-col items-center justify-end rounded-tl-[17px] rounded-tr-[17px] w-[99%] md:w-full">
                      <div
                        className="bg-cover md:h-[300px] bg-no-repeat flex flex-col gap-1.5 h-[370px] items-center justify-start mt-[7px] pb-[19px] px-[19px] rounded-[17px] w-[97%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_frame1423.png')",
                        }}
                      >
                        <Img
                          className="h-[15px] md:h-[10px] md:h-auto object-cover"
                          src="images/img_camera.png"
                          alt="camera"
                        />
                        
                        {/* center content */}
                        <div className="bg-white-A700_01 flex flex-col items-start justify-start mb-0.5 p-[17px] rounded-[26px] w-full md:h-full">
                          <Img
                            className="h-[182px] md:h-full sm:h-auto object-cover rounded-[17px] w-full"
                            src={sections[currentSection + 1].backgroundImage}
                            alt="rectangle5751"
                          />
                          <Text
                            className="capitalize mt-4 text-[19.91px] text-black-900 w-full md:text-[14px]"
                            size="txtCloserTextSemiBold1991"
                          >
                            {sections[currentSection + 1].text}
                          </Text>
                          <Text
                            className="capitalize mb-0.5 mt-[9px] text-[19.91px] text-gray-600_01 md:text-[12px]"
                            size="txtCloserTextRegular1991"
                          >
                            {sections[currentSection + 1].description}
                          </Text>
                        </div>

                      </div>
                    </div>
                    <div className="h-5 relative w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                          <div className="bg-gradient4  h-5 rounded-bl-[9px] w-[10%]"></div>
                          <div className="bg-gradient4  h-5 rotate-[180deg] rounded-bl-[9px] w-[10%]"></div>
                        </div>
                      </div>
                      <div className="absolute bg-gradient3  h-[17px] inset-x-[0] mx-auto rounded-bl-[9px] rounded-br-[9px] top-[0] w-[99%]"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[27px] md:h-[42px] mb-4 relative w-full md:w-full px-3 md:p-0">
                  <Img
                    className="relative inset-[0] justify-center object-cover w-full"
                    src="images/img_macbook_bottom.png"
                    alt="bottom"
                  />
                </div>
              </div>
            </div>

            <div className="md:h-[477px] h-[420px] w-[50rem] flex justify-center items-center w-full md:hidden">
              <div
                className={`bg-cover bg-no-repeat flex flex-col gap-4 h-[282px] items-center justify-center rounded-[11px] shadow-bs2 px-4`}
                style={{ backgroundImage: `url(${sections[currentSection + 2].backgroundImage})`, maxWidth: "500px" }}
              >
                <Text
                  className="capitalize mt-[109px] text-2xl md:text-[22px] text-white-A700_01 sm:text-xl w-[99%] sm:w-full"
                  size="txtCloserTextBold24"
                >
                  {sections[currentSection + 2].text}
                </Text>
                <Text
                  className="capitalize leading-[24.00px] mb-[21px] text-lg text-white-A700_01 w-[98%] sm:w-full"
                  size="txtInterMedium18"
                >
                  {sections[currentSection + 2].description}
                </Text>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-8 items-center justify-center mt-[60px] w-[6%] md:w-full">
            <Button
              onClick={() => handleArrowClick("left")}
              className="border-2 border-red-300_02 border-solid flex items-center justify-center rounded-[19px] w-10"
              color="gray_100_02"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_arrowleft.svg" alt="arrowleft" />
            </Button>
            <Button
              onClick={() => handleArrowClick("right")}
              className="border-2 border-red-300_02 border-solid flex h-[39px] items-center justify-center rounded-[19px] w-10"
              color="gray_100_02"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_arrowright.svg" alt="arrowright" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageColumnSix.defaultProps = {
  textone: "Customer Engagement and Loyalty at one place",
  texttwo:
    "Select a template, Edit Details, Customise your way, and Never miss a chance to Engage your customers!",
  textthree: "User Experience (UX) Design in Software Development",
  textfour:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
  textfive: (
    <>WhatsApp Marketing Strategies to Elevate Your Restaurant&#39;s Customer</>
  ),
  textsix: "adipiscing elit. Nulla tincidunt urna nec ligula. ",
  textseven: "Emerging Trends in Software Development :",
  texteight:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
  textnine: "Case Studies of Successful Software Implementations",
  textten:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
  texteleven: "Best Practices for Secure Software Development",
  texttwelve:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt urna nec ligula. ",
};

export default TechjetHomePageColumnSix;

