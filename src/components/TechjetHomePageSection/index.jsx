import React, { useState } from "react";

import { Img, Text } from "components";

const TechjetHomePageSection = (props) => {

  const [hoveredSection, setHoveredSection] = useState("images/img_ellipse211.png");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start my-[26px] w-full">
          <Text
            className="capitalize leading-[72.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[68%] sm:w-full"
            size="txtCloserTextMedium48"
          >
            {props?.integratedwithtext}
          </Text>
          <Text
            className="capitalize leading-[36.00px] mt-6 text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
            size="txtCloserTextRegular24"
          >
            {props?.descriptiontwotext}
          </Text>
          <div className="flex md:flex-col flex-row md:gap-[46px] items-start justify-between mt-[99px] w-full">
            <div className="flex md:flex-1 md:flex-col flex-row gap-3.5 items-start justify-between md:mt-0 mt-[9px] w-[43%] md:w-full">
              <div className="h-[648px] relative w-[96%] md:w-full">
                <Img
                  className="h-[19px] mb-[-3.83px] ml-auto mr-[191px] rounded w-[19px] z-[1]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup_Three"
                />
                <div className="h-[632px] m-auto w-full">
                  <Img
                    className="absolute h-[632px] inset-y-[0] my-auto right-[0] w-[632px]"
                    src="images/img_ellipse212.svg"
                    alt="ellipse212"
                  />
                  <div className="absolute h-[632px] inset-y-[0] left-[0] my-auto w-[632px] md:w-full">
                    <Img
                      className="h-[632px] m-auto object-cover w-[632px] transition-opacity duration-300 ease-in-out"
                      src={hoveredSection}
                      alt="ellipse211"
                    />
                    <Img
                      className="absolute h-[19px] left-[0] rounded top-[5%] w-[19px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Img
                      className="absolute bottom-[4%] h-[19px] right-[13%] rounded w-[19px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup_One"
                    />
                    <Img
                      className="absolute bottom-[43%] h-[19px] left-[15%] rounded w-[19px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup_Two"
                    />
                  </div>
                </div>
              </div>
              <Img
                className="h-[19px] md:mt-0 mt-[354px] rounded w-[19px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup_Four"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-[59px] items-center justify-start w-[55%] md:w-full">
              <div 
                className="flex flex-col gap-6 items-start justify-start w-full"
                onMouseEnter={() => setHoveredSection("images/img_ellipse211.png")}
                onMouseLeave={() => setHoveredSection("images/img_ellipse211.png")}
              >
                  <Text
                    className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                    size="txtCloserTextBold28"
                  >
                    {props?.posstext}
                  </Text>
                  <Text
                    className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-900 sm:text-xl w-full"
                    size="txtCloserTextRegular24Gray900"
                  >
                    {props?.descriptionthreetext}
                  </Text>
              </div>
              <div 
                className="flex flex-col gap-6 items-start justify-start w-full"
                onMouseEnter={() => setHoveredSection("images/img_ellipse221.png")}
                onMouseLeave={() => setHoveredSection("images/img_ellipse211.png")}
              >
                  <Text
                    className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                    size="txtCloserTextBold28"
                  >
                    {props?.onlineorderingtext}
                  </Text>
                  <Text
                    className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                    size="txtCloserTextRegular24"
                  >
                    {props?.descriptionfourtext}
                  </Text>
              </div>
              <div 
                className="flex flex-col gap-6 items-start justify-start w-full"
                onMouseEnter={() => setHoveredSection("images/img_ellipse231.png")}
                onMouseLeave={() => setHoveredSection("images/img_ellipse211.png")}
              >
                <Text
                  className="capitalize sm:text-2xl md:text-[26px] text-[28px] text-gray-900"
                  size="txtCloserTextBold28"
                >
                  {props?.ecommercestoretext}
                </Text>
                <Text
                  className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                  size="txtCloserTextRegular24"
                >
                  {props?.descriptionfivetext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TechjetHomePageSection.defaultProps = {
  integratedwithtext:
    "Integrated with POSs, Online Ordering Platforms, Shopify and more.",
  descriptiontwotext:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. ",
  posstext: "pOSs",
  descriptionthreetext:
    "Qubriux seamlessly integrates with Point of Sale (POS) systems, streamlining operations and unifying customer interactions. Effortlessly capture in-store data for enhanced engagement, loyalty, and personalized marketing. Revolutionize your connections with insightful analytics.",
  onlineorderingtext: "Online ordering",
  descriptionfourtext:
    "Qubriux seamlessly integrates with online ordering platforms, offering a cohesive digital experience. Whether on your website or third-party platforms, Qubriux ensures a 360° view of interactions. Elevate your online presence and turn every order into an opportunity for enhanced engagement.",
  ecommercestoretext: "E-commerce store",
  descriptionfivetext: (
    <>
      Transform your online store using Qubriux&#39;s seamless integration with
      Shopify and other platforms. Leverage Qubriux&#39;s omnichannel marketing
      automation for tailored promotions, a personalized shopping journey, and
      lasting customer connections effortlessly.
    </>
  ),
};

export default TechjetHomePageSection;
