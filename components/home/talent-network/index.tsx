import React from "react";
import { Typography } from "@/components/common/typography";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Images } from "@/consts";

const TalentNetwork = () => {
  return (
    <>
      <div className={clsx("bg-primary-500 z-10", styles.ellipse)}></div>
      <img
        src={Images.spaceLines}
        className="absolute right-[-130px] top-[-190px] md:right-[-80px] md:top-[-170px] xl:right-0 xl:top-0 z-10 "
        alt=""
      />
      <img
        src={Images.linesLeft}
        className="hidden md:block absolute left-[-70px] xl:left-0 md:top-[221px] xl:top-[348px] z-10 md:h-[277px] xl:h-auto"
        alt=""
      />
      <img
        src={Images.linesRight}
        className="hidden md:block absolute right-0 md:top-[419px] xl:top-[419px] z-10 md:h-[238px] xl:h-auto"
        alt=""
      />
      <section className="container-meet relative z-20 md:px-[25px] xl:px-8">
        <div className="title-header relative items-center flex flex-col justify-center mt-16 xl:mt-20">
          <Typography
            type="custom"
            className="text-center text-[53px] md:text-[68px] xl:text-[139px] font-semibold text-gradient-primary z-10"
            tag="h1"
          >
            Meet Bondex
          </Typography>
          <div
            className={clsx("absolute w-full h-full ", styles.gradientBgTitle)}
          ></div>
        </div>

        <div className="relative mt-12 md:mt-16 mb-20 xl:mt-20 flex flex-col bg-header-talent rounded-[29px] bg-cover bg-center justify-end">
          <div className={clsx("absolute", styles.gradientBgBoxTalent)}></div>
          <div className="flex flex-col md:max-w-[554px] xl:max-w-[768px] mx-auto gap-6 py-[59px] xl:py-44 ">
            <Typography
              type="mediumTitle"
              className="text-white font-semibold text-center leading-[44px] xl:leading-[72px]"
            >
              Talent network and recruitment for Web3
            </Typography>
            <Typography
              type="bigParagraph"
              className="text-white text-center font-sans"
            >
              Earn real money when you help people find their dream job
            </Typography>

            <div className="h-[64px] w-full bg-white"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentNetwork;
