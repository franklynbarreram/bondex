import React from "react";
import { Typography } from "../../typography";
import { Images, footerImages } from "@/consts";
import Image from "next/image";

import Link from "next/link";

import styles from "./styles.module.scss";
import clsx from "clsx";

export const Footer = () => {
  const arrayLinks = [
    {
      name: "Product",
      links: [
        {
          name: "Home",
          url: "",
        },
        {
          name: "Jobs portal",
          url: "",
        },
      ],
    },
    {
      name: "How it works",
      links: [
        {
          name: "For talent",
          url: "",
        },
        {
          name: "For recruiters",
          url: "",
        },
        {
          name: "For companies",
          url: "",
        },
      ],
    },
    {
      name: "Company",
      links: [
        {
          name: "About",
          url: "",
        },
        {
          name: "Contact",
          url: "",
        },
        {
          name: "Help Centre",
          url: "",
        },
        {
          name: "Investors",
          url: "",
        },
      ],
    },
  ];

  const arraySocialMedia = [
    {
      icon: "/icons/socialMedia/discord.svg",
      url: "",
    },
    {
      icon: "/icons/socialMedia/linkedin.svg",
      url: "",
    },
    {
      icon: "/icons/socialMedia/twitter.svg",
      url: "",
    },
    {
      icon: "/icons/socialMedia/facebook.svg",
      url: "",
    },
    {
      icon: "/icons/socialMedia/instagram.svg",
      url: "",
    },
  ];

  return (
    <footer className="  relative">
      <div className="px-10  1.5xl:px-28 pt-16 pb-12 flex flex-col gap-y-[50px] xl:gap-y-[78px] ">
        <div className="flex justify-between flex-col xl:flex-row">
          <div className="flex items-center xl:items-start flex-col">
            <div className="max-w-[320px] flex items-center xl:items-start flex-col gap-y-8">
              <div>
                <Image
                  src={Images.logo}
                  width={124}
                  height={34}
                  alt="Bondex logo"
                />
              </div>
              <div>
                <Typography
                  type="paragraph"
                  className="font-sans text-gray-200 font-normal"
                >
                  {`Join the future of work and money, Let's disrupt the talent
                markets!`}
                </Typography>
              </div>
              <div>
                <Typography
                  type="smallParagraph"
                  className="text-primary-300 font-sans font-semibold"
                >
                  Join our communities
                </Typography>
                <div className="flex gap-x-4 mt-2">
                  {arraySocialMedia.map((item, index) => {
                    return (
                      <button key={index}>
                        <Image
                          src={item.icon}
                          width={34}
                          height={34}
                          alt={"icon"}
                        ></Image>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:gap-x-[114px] mt-10 xl:mt-0">
            <div className="flex justify-center gap-x-[114px] sm:gap-x-[286px] iphonePro:justify-between flex-wrap xl:gap-x-[40px] 1.5xl:gap-x-[88px] gap-y-5">
              {arrayLinks.map((item, index) => {
                return (
                  <div key={index} className="text-center iphonePro:text-start">
                    <Typography
                      type="smallParagraph"
                      className="text-primary-300 font-sans font-semibold"
                    >
                      {item.name}
                    </Typography>
                    <div className="flex flex-col gap-y-3 mt-4">
                      {item.links.map((link, index) => {
                        return (
                          <Link href={link.url} key={index}>
                            <button className="text-gray-200 font-semibold text-sm px-0 py-0">
                              {link.name}
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center xl:items-start mt-7 xl:mt-0">
              <Typography
                type="smallParagraph"
                className="text-primary-300 font-sans font-semibold"
              >
                Get the app
              </Typography>
              <div className="mt-4 flex flex-row gap-x-3 xl:flex-col gap-y-4">
                <button>
                  <img
                    src={footerImages.downloadAppStore}
                    className="w-[164px] h-[50px] xl:w-[135px] xl:h-[40px]"
                    alt={"App Store"}
                  />
                </button>
                <button>
                  <img
                    src={footerImages.downloadplayStore}
                    className="w-[164px] h-[50px] xl:w-[135px] xl:h-[40px]"
                    alt={"Play Store"}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr className="h-[1px] bg-gray-400  border-none hidden xl:block" />
          <div className="flex justify-between flex-col xl:flex-row gap-y-5 ">
            <div className="text-center xl:text-start order-2 xl:order-1">
              <Typography
                type="paragraph"
                className="font-sans text-gray-400  font-normal mt-0 xl:mt-8 hidden xl:block"
              >
                © 2023 The Bondex Network In. All rights reserved.
              </Typography>
              <Typography
                type="paragraph"
                className="font-sans text-gray-400  font-normal  block xl:hidden text-sm sm:text-base"
              >
                © 2023 Bondex Private LTD
              </Typography>
            </div>
            <div className="xl:mt-8 flex flex-row gap-x-3 justify-center xl:justify-start order-1 xl:order-2">
              <Link href="">
                <button className="text-gray-400 text-sm font-normal font-sans">
                  {" "}
                  Data Privacy
                </button>
              </Link>
              <p className="text-gray-400 text-sm font-normal font-sans leading-6">
                |
              </p>
              <Link href="">
                <button className="text-gray-400 text-sm font-normal font-sans">
                  {" "}
                  Terms & Conditions
                </button>
              </Link>
              <p className="text-gray-400 text-sm font-normal font-sans leading-6 hidden xl:block">
                |
              </p>
              <Link href="">
                <button className=" text-gray-400 text-sm font-normal font-sans hidden xl:block">
                  {" "}
                  Copyright Policy
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.positionEllipse)}>
        {" "}
        <div className={clsx("", styles.ellipse)}></div>
      </div>
    </footer>
  );
};
