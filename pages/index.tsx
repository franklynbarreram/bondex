import * as React from "react";
import { GetServerSideProps } from "next";
import { Typography } from "@/components/common/typography";
import TalentNetwork from "@/components/home/talent-network";

const Home = () => {
  return (
    <div className="container-home md:px-6 xl:px-[73px]">
      <TalentNetwork />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Home;
