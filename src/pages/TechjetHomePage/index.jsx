import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Slider,
  Text,
} from "components";
import TechjetHomePageColumnEleven from "components/TechjetHomePageColumnEleven";
import TechjetHomePageColumnSix from "components/TechjetHomePageColumnSix";
import TechjetHomePageColumnrectangle5748 from "components/TechjetHomePageColumnrectangle5748";
import TechjetHomePageColumnrectangle5798 from "components/TechjetHomePageColumnrectangle5798";
import TechjetHomePageRow4b from "components/TechjetHomePageRow4b";
import TechjetHomePageRowgroup43241 from "components/TechjetHomePageRowgroup43241";
import TechjetHomePageRowuser from "components/TechjetHomePageRowuser";
import TechjetHomePageSection from "components/TechjetHomePageSection";
import TechjetHomePageWecater from "components/TechjetHomePageWecater";

const productsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const industriesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const TechjetHomePagePage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-closertext items-center justify-end mx-auto pt-[73px] w-full">
        <div className="bg-gradient6  flex flex-col items-end justify-start max-w-[1900px] mx-auto p-[21px] md:px-5 w-full">
          <div className="flex flex-col gap-[25px] items-center justify-start mb-24 mt-[31px] w-[96%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between pt-1.5 w-[97%] md:w-full">
              <Img
                className="h-14 md:h-auto object-cover"
                src="images/img_frame1631.png"
                alt="frame1631"
              />
              <div className="flex sm:flex-col flex-row gap-8 items-center justify-center mb-3 md:mt-0 mt-[17px]">
                <Text
                  className="capitalize text-gray-900 text-xl"
                  size="txtCloserTextMedium20"
                >
                  about us
                </Text>
                <SelectBox
                  className="capitalize font-medium leading-[normal] text-gray-900 text-left text-xl w-[22%] sm:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[15px] mr-[0] w-[15px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group43173"
                  options={productsOptionsList}
                  isSearchable={false}
                  placeholder="products"
                />
                <SelectBox
                  className="capitalize font-medium leading-[normal] text-gray-900 text-left text-xl w-[24%] sm:w-full"
                  placeholderClassName="text-gray-900"
                  indicator={
                    <Img
                      className="h-[15px] mr-[0] w-[15px]"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group43174"
                  options={industriesOptionsList}
                  isSearchable={false}
                  placeholder="industries"
                />
                <Text
                  className="capitalize text-gray-900 text-xl"
                  size="txtCloserTextMedium20"
                >
                  resources
                </Text>
              </div>
              <div className="flex flex-row gap-8 items-center justify-between md:mt-0 mt-1.5 w-[19%] md:w-full">
                <Img
                  className="h-[26px] w-[26px]"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
                <Button
                  className="capitalize cursor-pointer font-medium leading-[normal] min-w-[200px] text-center text-xl"
                  shape="round"
                  size="sm"
                  variant="gradient"
                  color="red_300_yellow_900"
                >
                  contact us
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="capitalize md:text-5xl text-6xl text-black-900"
                  size="txtCloserTextSemiBold60"
                >
                  <span className="text-red-800 font-closertext text-left font-semibold">
                    Elevate{" "}
                  </span>
                  <span className="text-black-900 font-closertext text-left font-semibold">
                    Your Customer{" "}
                  </span>
                </Text>
                <Text
                  className="capitalize mt-[22px] md:text-5xl text-6xl text-black-900"
                  size="txtCloserTextSemiBold60"
                >
                  Engagement with Qubriux!
                </Text>
                <Text
                  className="capitalize leading-[36.00px] mt-4 text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                  size="txtCloserTextRegular24"
                >
                  The industry-leading customer loyalty and engagement platform
                  for small and medium enterprises.
                </Text>
                <Button
                  className="capitalize cursor-pointer font-medium leading-[normal] min-w-[214px] mt-20 shadow-bs5 text-center text-xl"
                  shape="round"
                  size="sm"
                  variant="gradient"
                  color="red_300_yellow_900"
                >
                  Request a demo
                </Button>
              </div>
              <Img
                className="h-[823px] md:h-auto object-cover"
                src="images/img_group43193.png"
                alt="group43193"
              />
            </div>
          </div>
        </div>
        <Text
          className="capitalize mt-[50px] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
          size="txtCloserTextMedium48"
        >
          We are not alone
        </Text>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1721px] mt-16 mx-auto md:px-5 w-full">
          <Img
            className="h-[97px] md:h-auto object-cover"
            src="images/img_fortunelogo.png"
            alt="fortunelogo"
          />
          <Img
            className="h-[114px] md:h-auto object-cover"
            src="images/img_unnamed.png"
            alt="unnamed"
          />
          <Img
            className="h-[97px] md:h-auto object-cover"
            src="images/img_fortunelogo_97x285.png"
            alt="fortunelogo_One"
          />
          <Img
            className="h-[114px] md:h-auto object-cover"
            src="images/img_unnamed_114x124.png"
            alt="unnamed_One"
          />
          <Img
            className="sm:flex-1 h-[114px] md:h-auto object-cover w-[115px] sm:w-full"
            src="images/img_fortunelogo_114x115.png"
            alt="fortunelogo_Two"
          />
        </div>
        <div className="flex flex-col items-center justify-start mt-[200px] w-full">
          <div className="h-[1087px] md:h-[777px] md:px-5 relative w-full">
            <div className="absolute bg-gray-100_01 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto p-[100px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[23px] items-center justify-start mb-4 mt-[366px]">
                <Text
                  className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                  size="txtCloserTextMedium48"
                >
                  Qubriux Odyssey: Elevate Your Business with AI-Driven
                  Brilliance!
                </Text>
                <Text
                  className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-full"
                  size="txtCloserTextRegular24"
                >
                  Ready for a game-changer in customer engagement? Welcome to
                  Qubriux - where AI meets marketing magic for unparalleled
                  customer experiences. Qubriux is your gateway to a new era of
                  customer engagement. Embrace the forward-thinking fusion of
                  marketing automation, predictive analytics, and seamlessly
                  integrated loyalty management within a robust platform.
                </Text>
              </div>
            </div>
            <div className="absolute h-[667px] inset-x-[0] mx-auto top-[0] w-[90%] md:w-full">
              <Img
                className="h-[667px] m-auto object-cover rounded-[16px] w-full"
                src="images/img_frame1412.png"
                alt="frame1412"
              />
              <Img
                className="absolute h-[118px] inset-x-[0] mx-auto top-[39%] w-[118px]"
                src="images/img_group43068.svg"
                alt="group43068"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1720px] mt-[203px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtCloserTextMedium48"
              >
                We are not alone
              </Text>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <TechjetHomePageRowgroup43241 className="flex flex-1 sm:flex-col flex-row gap-[23px] items-start justify-between pb-1.5 pr-1.5 w-full" />
                <TechjetHomePageRow4b className="flex flex-1 sm:flex-col flex-row gap-[23px] items-start justify-center pb-1.5 pr-1.5 w-full" />
                <TechjetHomePageRowuser className="flex flex-1 sm:flex-col flex-row gap-[23px] items-start justify-between pb-1.5 pr-1.5 w-full" />
              </List>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[81px] items-start justify-start max-w-[1698px] mt-[167px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-6 items-start justify-start">
              <Text
                className="capitalize leading-[72.00px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-[76%] sm:w-full"
                size="txtCloserTextMedium48"
              >
                <span className="text-black-900 font-closertext text-left font-medium">
                  Simplify{" "}
                </span>
                <span className="text-red-800 font-closertext text-left font-medium">
                  Customer Engagement
                </span>
                <span className="text-black-900 font-closertext text-left font-medium">
                  {" "}
                  with One Affordable Solution.
                </span>
              </Text>
              <Text
                className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                size="txtCloserTextRegular24"
              >
                You are busy running your business. The last thing you want is
                to deal with multiple customer platforms.Make your life easy
                with a one stop platform to handle it all with an affordable
                pricing.
              </Text>
            </div>
            <List
              className="flex flex-col gap-[101px] items-center w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-col items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[375px] md:h-auto object-cover rounded-[16px]"
                    src="images/img_frame1438.png"
                    alt="frame1438"
                  />
                  <div className="flex flex-col gap-[39px] items-start justify-start">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="capitalize leading-[57.00px] md:text-4xl sm:text-[34px] text-[38px] text-black-900 w-full"
                        size="txtCloserTextMedium38"
                      >
                        Foster customer retention with precision through
                        strategic automation.
                      </Text>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[96%] sm:w-full"
                        size="txtCloserTextRegular24"
                      >
                        <>
                          Seeking to deliver personalized promotions on your
                          customers&#39; birthdays or win back lost customers?
                          Our automation streamlines the strategic planning and
                          engagement process with your customers, allowing you
                          to focus on the core operations of your business.
                        </>
                      </Text>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-medium leading-[normal] min-w-[194px] text-center text-xl"
                      shape="round"
                      size="sm"
                      variant="gradient"
                      color="red_300_yellow_900"
                    >
                      Know more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[95%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[375px] md:h-auto object-cover rounded-[16px]"
                    src="images/img_frame1439.png"
                    alt="frame1439"
                  />
                  <div className="flex flex-col md:gap-10 gap-[77px] items-start justify-start">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="capitalize leading-[57.00px] md:text-4xl sm:text-[34px] text-[38px] text-black-900 w-[91%] sm:w-full"
                        size="txtCloserTextMedium38"
                      >
                        Partner with other businesses for cross-promotions.
                      </Text>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                        size="txtCloserTextRegular24"
                      >
                        <>
                          Are your customers happy with your offers? Qubriux
                          let&#39;s you partner with other merchants and create
                          relevant offers for your customers. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Integer nec
                          odio. Praesent libero.
                        </>
                      </Text>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-medium leading-[normal] min-w-[200px] text-center text-xl"
                      shape="round"
                      size="sm"
                      variant="gradient"
                      color="red_300_yellow_900"
                    >
                      Know more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[375px] md:h-auto object-cover rounded-[16px]"
                    src="images/img_frame1440.png"
                    alt="frame1440"
                  />
                  <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                      <Text
                        className="capitalize md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                        size="txtCloserTextMedium38"
                      >
                        Create custom loyalty programs.
                      </Text>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                        size="txtCloserTextRegular24"
                      >
                        Create loyalty program with ease. Create loyalty tiers
                        such as silver,gold, platinum, etc. Our platform takes
                        care of promoting and maintaining customers into tiers.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer nec odio. Praesent libero. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Integer nec odio.
                        Praesent libero.
                      </Text>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-medium leading-[normal] min-w-[200px] text-center text-xl"
                      shape="round"
                      size="sm"
                      variant="gradient"
                      color="red_300_yellow_900"
                    >
                      Know more
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Img
                    className="h-[375px] md:h-auto object-cover rounded-[16px]"
                    src="images/img_frame1441.png"
                    alt="frame1441"
                  />
                  <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start">
                    <div className="flex flex-col gap-[23px] items-start justify-start w-full">
                      <Text
                        className="capitalize md:text-4xl sm:text-[34px] text-[38px] text-black-900"
                        size="txtCloserTextMedium38"
                      >
                        Integrated with Email,SMS,Whatsapp,
                      </Text>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                        size="txtCloserTextRegular24"
                      >
                        Reach your customers through multiple channels with one
                        click. Design campaigns which are integrated with Email,
                        SMS, WhatsApp, Facebook & Instagram. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Integer nec odio.
                        Praesent libero. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Integer nec odio. Praesent libero.
                      </Text>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-medium leading-[normal] min-w-[200px] text-center text-xl"
                      shape="round"
                      size="sm"
                      variant="gradient"
                      color="red_300_yellow_900"
                    >
                      Know more
                    </Button>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <TechjetHomePageSection className="bg-gray-100_01 flex flex-col items-center justify-start mt-[200px] p-[94px] md:px-10 sm:px-5 w-full" />
          <div className="flex flex-col gap-[59px] items-start justify-start max-w-[1664px] mt-[209px] mx-auto md:px-5 w-full">
            <Text
              className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtCloserTextMedium48"
            >
              <span className="text-black-900 font-closertext text-left font-medium">
                Use AI to help in{" "}
              </span>
              <span className="text-red-800 font-closertext text-left font-medium">
                Loyalty Management
              </span>
              <span className="text-black-900 font-closertext text-left font-medium">
                {" "}
                & Analytics
              </span>
            </Text>
            <TechjetHomePageColumnrectangle5748 className="bg-white-A700_01 flex flex-col items-center justify-start w-full" />
          </div>
          <TechjetHomePageColumnSix className="bg-gradient1  flex flex-col items-center justify-end mt-56 py-[100px] w-full" />
          <TechjetHomePageWecater className="flex md:flex-col flex-row md:gap-10 gap-16 items-center justify-start max-w-[1720px] mt-[300px] mx-auto md:px-5 w-full" />
          <div className="bg-gray-100_01 flex md:flex-col flex-row gap-8 items-center justify-start mt-[203px] p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-7 items-start justify-start">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                size="txtCloserTextMedium48"
              >
                We are featured in
              </Text>
              <Text
                className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                size="txtCloserTextRegular24"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio.
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-8 grid md:grid-cols-1 grid-cols-2 md:mt-0 my-5 w-[58%] md:w-full"
              orientation="horizontal"
            >
              <TechjetHomePageColumnrectangle5798 className="bg-white-A700_01 flex flex-col gap-6 items-center justify-start p-8 sm:px-5 rounded-[16px] shadow-bs4 w-full" />
              <TechjetHomePageColumnrectangle5798
                className="bg-white-A700_01 flex flex-col gap-6 items-center justify-start p-8 sm:px-5 rounded-[16px] shadow-bs4 w-full"
                rectangle5798="images/img_rectangle5798_263x415.png"
                fortune="USA Today"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Lorem ipsum........."
              />
            </List>
          </div>
          <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start max-w-[1720px] mt-52 mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start">
              <Text
                className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center"
                size="txtCloserTextMedium48"
              >
                Frequently Asked Questions
              </Text>
              <Text
                className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                size="txtCloserTextRegular24"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                tincidunt urna nec ligula{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start shadow-bs6 w-full">
                <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[29px] sm:px-5 rounded-tl-[16px] rounded-tr-[16px] w-full">
                  <Text
                    className="capitalize ml-2.5 md:ml-[0] md:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                    size="txtCloserTextMedium32"
                  >
                    Q. Do you offer customization options for your solutions?
                  </Text>
                  <Img
                    className="h-[30px] mr-2.5 w-[30px]"
                    src="images/img_arrowdownsign.svg"
                    alt="arrowdownsign"
                  />
                </div>
                <div className="bg-gray-50 flex flex-col items-center justify-start p-10 sm:px-5 rounded-bl-[16px] rounded-br-[16px] w-full">
                  <div className="flex md:flex-col flex-row gap-[34px] items-center justify-start w-full">
                    <Line className="bg-gradient7  md:h-1 h-[356px] mb-1 w-1 md:w-full" />
                    <div className="flex md:flex-1 flex-col gap-6 items-start justify-start md:mt-0 mt-[3px] w-[98%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                          size="txtCloserTextRegular24"
                        >
                          Absolutely, we offer customization options for your
                          solutions, specifically in various features:
                        </Text>
                      </div>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                        size="txtCloserTextRegular24"
                      >
                        <span className="text-gray-900 font-closertext text-left font-semibold">
                          Segmentation:
                        </span>
                        <span className="text-gray-800 font-closertext text-left font-normal">
                          {" "}
                          Our platform provides a range of parameters for
                          filtering customer segments. Should you require
                          additional parameters tailored to your needs, we’ll
                          create them for you. This facilitates segmenting
                          customers based on -average monthly spend, Life time
                          value, no of purchases in this year etc.
                        </span>
                      </Text>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                        size="txtCloserTextRegular24"
                      >
                        <span className="text-gray-900 font-closertext text-left font-semibold">
                          Loyalty:
                        </span>
                        <span className="text-gray-800 font-closertext text-left font-normal">
                          {" "}
                          Utilize our Loyalty program to retain customers. You
                          can design, automate, and customize tier-based loyalty
                          programs that align with the unique needs of your
                          business and customers.
                        </span>
                      </Text>
                      <Text
                        className="capitalize leading-[36.00px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                        size="txtCloserTextRegular24"
                      >
                        <span className="text-gray-900 font-closertext text-left font-semibold">
                          Offers:
                        </span>
                        <span className="text-gray-800 font-closertext text-left font-normal">
                          {" "}
                          In today’s era of personalization, Qubriux empowers
                          you to create AI-based offers. Our platform enables
                          the delivery of various offer types, and we are
                          capable of adding more options to effectively target
                          your audience and enhance customer lifetime value.
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[29px] sm:px-5 rounded-[16px] shadow-bs7 w-full">
                <Text
                  className="capitalize ml-2.5 md:ml-[0] md:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                  size="txtCloserTextRegular32"
                >
                  Q. How does Qubriux ensure data security and privacy
                </Text>
                <Img
                  className="h-[30px] mr-2.5 w-[30px]"
                  src="images/img_arrowdownsign.svg"
                  alt="arrowdownsign_One"
                />
              </div>
              <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[29px] sm:px-5 rounded-[16px] shadow-bs7 w-full">
                <Text
                  className="capitalize ml-2.5 md:ml-[0] md:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                  size="txtCloserTextRegular32"
                >
                  Q. Do you offer training or onboarding for new users?
                </Text>
                <Img
                  className="h-[30px] mr-2.5 w-[30px]"
                  src="images/img_arrowdownsign.svg"
                  alt="arrowdownsign_Two"
                />
              </div>
              <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[29px] sm:px-5 rounded-[16px] shadow-bs7 w-full">
                <Text
                  className="capitalize ml-2.5 md:ml-[0] md:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-center text-gray-900"
                  size="txtCloserTextRegular32"
                >
                  Q. Can I transfer my data from a previous product to Qubriux
                  solution?
                </Text>
                <Img
                  className="h-[30px] mr-2.5 w-[30px]"
                  src="images/img_arrowdownsign.svg"
                  alt="arrowdownsign_Three"
                />
              </div>
              <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[29px] sm:px-5 rounded-[16px] shadow-bs7 w-full">
                <Text
                  className="capitalize ml-2.5 md:ml-[0] md:mt-0 mt-[9px] md:text-3xl sm:text-[28px] text-[32px] text-gray-900"
                  size="txtCloserTextRegular32"
                >
                  <>
                    Q. How much technical experience do business users need to
                    operate thesoftware?
                  </>
                </Text>
                <Img
                  className="h-[30px] mr-2.5 w-[30px]"
                  src="images/img_arrowdownsign.svg"
                  alt="arrowdownsign_Four"
                />
              </div>
            </div>
          </div>
          <footer className="flex items-center justify-center mt-[200px] md:px-5 w-full">
            <div className="h-[1174px] relative w-full">
              <div className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start mb-[-180px] mx-auto p-[50px] md:px-10 sm:px-5 rounded-[16px] shadow-bs8 w-[90%] z-[1]">
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[3px] w-[47%] md:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtCloserTextMedium48"
                  >
                    Get in touch
                  </Text>
                  <Text
                    className="capitalize leading-[36.00px] mt-7 text-2xl md:text-[22px] text-gray-800 sm:text-xl w-full"
                    size="txtCloserTextRegular24"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla tincidunt urna nec ligula interdum, in tincidunt
                    sapien tempus. Suspendisse potenti. Sed euismod.
                  </Text>
                  <div className="flex md:flex-col flex-row gap-[25px] items-center justify-start mt-8 w-full">
                    <Img
                      className="h-16 w-16"
                      src="images/img_lightbulb.svg"
                      alt="lightbulb"
                    />
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtCloserTextRegular24"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[25px] items-center justify-start mt-8 w-2/5 md:w-full">
                    <Img
                      className="h-16 w-16"
                      src="images/img_arrowup.svg"
                      alt="arrowup"
                    />
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtCloserTextRegular24"
                    >
                      (+91) 9930741112
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[25px] items-center justify-start mt-8 w-[49%] md:w-full">
                    <Img
                      className="h-16 w-16"
                      src="images/img_lock_red_800.svg"
                      alt="lock_One"
                    />
                    <Text
                      className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl"
                      size="txtCloserTextRegular24"
                    >
                      info@Lorem ipsum.com
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:mt-0 mt-[9px] w-1/2 md:w-full">
                  <Text
                    className="capitalize text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtCloserTextMedium48"
                  >
                    request a demo
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                    <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                      <div className="flex flex-col gap-[33px] items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
                          <Text
                            className="bg-white-A700_01 capitalize justify-center outline outline-[1px] outline-deep_orange-400 sm:px-5 px-[35px] py-[17px] rounded-[16px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[385px]"
                            size="txtCloserTextRegular24"
                          >
                            First name
                          </Text>
                          <Text
                            className="bg-white-A700_01 capitalize justify-center outline outline-[1px] outline-deep_orange-400 sm:px-5 px-[35px] py-[17px] rounded-[16px] text-2xl md:text-[22px] text-gray-800 sm:text-xl w-[385px]"
                            size="txtCloserTextRegular24"
                          >
                            last name
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-[30px] items-center justify-between w-full">
                          <Input
                            name="frame164"
                            placeholder="Phone number"
                            className="capitalize md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                            wrapClassName="sm:flex-1 outline outline-[1px] outline-deep_orange-400 sm:w-full"
                            type="number"
                            shape="round"
                            color="white_A700_01"
                            size="md"
                            variant="fill"
                          ></Input>
                          <Input
                            name="frame165"
                            placeholder="Email id"
                            className="capitalize md:text-[22px] p-0 placeholder:text-gray-800 sm:text-xl text-2xl text-left w-full"
                            wrapClassName="sm:flex-1 outline outline-[1px] outline-deep_orange-400 sm:w-full"
                            type="email"
                            shape="round"
                            color="white_A700_01"
                            size="md"
                            variant="fill"
                          ></Input>
                        </div>
                      </div>
                      <div className="bg-white-A700_01 flex flex-col h-[223px] md:h-auto items-center justify-start max-w-[801px] outline outline-[1px] outline-deep_orange-400 sm:px-5 px-[39.84px] py-[15.93px] rounded-[16px] w-full">
                        <Text
                          className="capitalize text-2xl md:text-[22px] text-gray-800 sm:text-xl w-auto"
                          size="txtCloserTextRegular24"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="capitalize cursor-pointer font-medium leading-[normal] min-w-[801px] md:min-w-full mt-[60px] text-center text-xl"
                    shape="round"
                    size="md"
                    variant="gradient"
                    color="red_300_yellow_900"
                  >
                    submit
                  </Button>
                </div>
              </div>
              <div className="bg-yellow-900_02 flex flex-col items-center justify-end mt-auto mx-auto p-[30px] sm:px-5 w-full">
                <div className="flex flex-col items-center justify-start mt-[191px] w-[93%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[31%] md:w-full">
                      <Img
                        className="h-[70px] md:h-auto object-cover w-[43%]"
                        src="images/img_frame1631.png"
                        alt="frame1631_One"
                      />
                      <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col gap-4 items-start justify-start w-full">
                            <Text
                              className="text-white-A700_01 text-xl"
                              size="txtCloserTextSemiBold20"
                            >
                              Subscribe to Newsletter
                            </Text>
                            <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-full">
                              <Input
                                name="group42603"
                                placeholder="Email ID"
                                className="!placeholder:text-black-900 !text-black-900 font-inter leading-[normal] p-0 text-base text-left w-full"
                                wrapClassName="border border-red-900 border-solid sm:flex-1 rounded-lg sm:w-full"
                                type="email"
                                color="white_A700_01"
                                size="sm"
                                variant="fill"
                              ></Input>
                              <Button
                                className="capitalize cursor-pointer font-closertext font-medium leading-[normal] min-w-[200px] text-center text-xl"
                                shape="round"
                                color="white_A700_01"
                                size="sm"
                                variant="fill"
                              >
                                subscribe
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <TechjetHomePageColumnEleven className="flex flex-col items-center justify-start mt-[23px] w-[29%] md:w-full" />
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[154px] md:mt-0 mt-[13px] w-[7%] md:w-full">
                      <Text
                        className="capitalize text-white-A700_01 text-xl"
                        size="txtCloserTextSemiBold20"
                      >
                        quick links
                      </Text>
                      <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">home</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-3 text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">about us</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-[13px] text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">products</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-[13px] text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">
                              industries
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-[15px] text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">pricing</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-[11px] text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">resources</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start md:ml-[0] ml-[127px] md:mt-0 mt-[13px] w-[17%] md:w-full">
                      <Text
                        className="capitalize text-white-A700_01 text-xl"
                        size="txtCloserTextSemiBold20"
                      >
                        Qubriux
                      </Text>
                      <ul className="flex flex-col items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">
                              Introduction to the Qubriux
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-[13px] text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">Our Story</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-[11px] text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">
                              Mission, Vision and Value Statement
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-3 text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">Our Focus</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize mt-3 text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">
                              Our Values
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex md:flex-1 flex-col gap-[15px] items-start justify-start md:ml-[0] ml-[114px] md:mt-0 mt-3.5 w-[8%] md:w-full">
                      <Text
                        className="capitalize text-white-A700_01 text-xl"
                        size="txtCloserTextSemiBold20"
                      >
                        explore
                      </Text>
                      <ul className="flex flex-col gap-[9px] items-start justify-start w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">
                              get started
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">
                              resource center
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">press</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="capitalize text-base text-white-A700_01"
                          >
                            <Text size="txtCloserTextRegular16">blog</Text>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Img
                      className="h-16 ml-8 md:ml-[0] md:mt-0 mt-[13px]"
                      src="images/img_group42614.svg"
                      alt="group42614"
                    />
                  </div>
                  <Line className="bg-white-A700_59 h-px mt-[35px] rotate-[180deg] w-full" />
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[30px] w-full">
                    <Text
                      className="text-base text-white-A700_01"
                      size="txtCloserTextMedium16"
                    >
                      © Qubriux All Right Reserved
                    </Text>
                    <Text
                      className="sm:ml-[0] ml-[655px] text-base text-center text-white-A700_01"
                      size="txtCloserTextMedium16"
                    >
                      Terms of Use
                    </Text>
                    <a
                      href="javascript:"
                      className="sm:ml-[0] ml-[632px] text-base text-right text-white-A700_01"
                    >
                      <Text size="txtCloserTextMedium16">Privacy Policy</Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TechjetHomePagePage;
