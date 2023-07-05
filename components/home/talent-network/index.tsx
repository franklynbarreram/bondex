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
        className="absolute right-0 top-0 z-10"
        alt=""
      />
      <section className="container-meet relative z-20">
        <div className="title-header relative items-center flex flex-col justify-center mt-20">
          <Typography
            type="custom"
            className="text-center text-[53px] md:text-[68px] lg:text-[139px] font-semibold text-gradient-primary z-10"
            tag="h1"
          >
            Meet Bondex
          </Typography>
          <div
            className={clsx("absolute w-full h-full ", styles.gradientBgTitle)}
          ></div>
        </div>

        <div className="mt-20 flex flex-col py-44 bg-header-talent rounded-[29px]">
          <div className="flex flex-col max-w-[768px] mx-auto gap-6">
            <Typography
              type="mediumTitle"
              className="text-white font-semibold text-center leading-[72px]"
            >
              Talent network and recruitment for Web3
            </Typography>
            <Typography type="bigParagraph" className="text-white text-center">
              Earn real money when you help people find their dream job
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
};

export default TalentNetwork;
