import * as React from "react";
import { GetServerSideProps } from "next";
import { Typography } from "@/components/common/typography";

const Home = () => {
  return (
    <>
      <Typography
        type="custom"
        className="w-full text-center text-[53px] md:text-[68px] lg:text-[139px] font-semibold mt-20 text-gradient-primary"
        tag="h1"
      >
        Meet Bondex
      </Typography>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Home;
