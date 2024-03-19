import Cart from "@/components/Cart";
import React from "react";

const page = () => {
  return (
    <div className="pt-[1px] 2xl:pt-[30px]">
      <div className="2xl:container flex bg-[#2A254B] justify-between items-center text-white p-0">
        <div className="container   2xl:p-10">
          <p className="text-[24px] pt-[40px] pb-[80px] w-auto 2xl:text-[32px] pb-[50px] w-[513px]">
            The furniture brand for the future, with timeless designs
          </p>
          <p className="text-[18px] pb-[32px] 2xl:hidden">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
          <button className="w-[342px] 2xl:w-[170px] px-[32px] py-3 mb-[150px] bg-slate-600">
            Viev collec
          </button>
          <p className="hidden 2xl:block text-[18px]">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>

        <img src="ong.png" alt="" className="hidden 2xl:block  h-[auto]" />
      </div>
      <p className="container w-[274px] text-left pl-0 pt-[48px] pb-[36px] text-[20px] 2xl:container text-[24px] text-center pt-[120px]  text-slate-800 pb-[51px]">
        What makes our brand different
      </p>
      <div className="container flex flex-wrap p-0 2xl:container flex justify-between items-center px-0">
        <div className="2xl: w-[270px] ">
          <img src="1.png" alt="" />
          <p className=" 2xl: text-[20px] pt-[16px] pb-[8px]">
            Next day as standard
          </p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-[270px]">
          <img src="2.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-[270px]">
          <img src="3.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
        <div className="w-[270px]">
          <img src="4.png" alt="" />
          <p className="text-[20px] pt-[16px] pb-[8px]">Next day as standard</p>
          <p className="text">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
      </div>
      {/* select */}

      <div className="container pt-[80px] 2xl:container pt-[160px] px-0">
        <p className="text-[20px] text-left 2xl:text-[32px] pb-[33px]">
          New ceramics
        </p>
        <Cart />
        <div
          className="p-0 
        flex justify-center"
        >
          <button className="w-[342px] 2xl:w-[170px]  py-[16px] mt-[35px]  bg-slate-100">
            View collection
          </button>
        </div>
      </div>
      {/* //////////// */}
      <div className="container p-0 pt-[86px] pb-[36px] 2xl:container pt-[160px] px-0 pb-[48px]">
        <p className="text-[20px] 2xl:text-[32px] pb-[33px]">
          Our popular products
        </p>
        <div className="flex flex-wrap 2xl:flex justify-between items-center">
          <div className="hidden 2xl:block w-[630px]">
            <img src="s-1.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
          <div className="w-[163px] 2xl:w-[305px]">
            <img src="s-2.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
          <div className="w-[163px] 2xl:w-[305px]">
            <img src="s-3.png" alt="" />
            <p className="text-[20px] pt-[24px] pb-[8px]">The Dandy chair</p>
            <p className="text-[18px]">£250</p>
          </div>
        </div>
        <div
          className="p-0 
        flex justify-center"
        >
          <button className="w-[342px] 2xl:w-[170px]  py-[16px] mt-[35px]  bg-slate-100">
            View collection
          </button>
        </div>
      </div>

      {/* /////////////
       */}
      <div className="hidden 2xl:block bg-slate-100 px-[74px] py-[52px]">
        <div className="container 2xl:container bg-white">
          <p className="text-[20px] text-left 2xl:text-center pt-[68px] pb-[16px] text-[36px]">
            Join the club and get the benefits
          </p>
          <p className="text-[14px] w-auto text-left 2xl:mx-auto text-[16px] w-[470px] text-center">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div
            className="hidden 2xl:flex 
          mx-auto justify-center gap-0 items-center w-[470px] pt-[72px] pb-[54px]"
          >
            <input
              type="text"
              placeholder="your@email.com"
              className="input-1"
            />
            <button className="btn-1 ">Sign Up</button>
            <div
              className="container flex  px-0
        justify-left gap-0 items-center w-[342px] pt-[72px] pb-[54px] 2xl:hidden"
            >
              <input
                type="text"
                placeholder="your@email.com"
                className="input-4"
              />
              <button className="btn-4 ">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////
       */}
      <div className="block w-[350px] min-w-full mx-auto 2xl:flex bg-container mx-auto justify-between items-center ">
        <div className="container 2xl:w-[536px]">
          <p className="text-[20px] pl-[0px] 2xl:text-[24px]   pb-[25px] w-[536px] max-w-full">
            From a studio in London to a global brand with over 400 outlets
          </p>
          <p className="text-[14px] pl-[0px] pb-[12px] 2xl:text-[16px] ]  pb-[24px] w-[536px] max-w-full">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[14px] pl-[0px] pb-[64px] 2xl:text-[16px]  pb-[126px] w-[536px] max-w-full">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>

          <button className="w-[342px] ml-[0px] 2xl:w-[170px]  py-[16px] mt-[35px]    bg-slate-100">
            Get in touch
          </button>
        </div>
        <img
          src="m.png"
          alt=""
          className="mr-0 pt-[20px] w-[390px]  2xl:p-0 w-[720px] "
        />
      </div>
    </div>
  );
};

export default page;
