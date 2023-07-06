import * as React from "react";
import { GetServerSideProps } from "next";
import { Typography } from "@/components/common/typography";
import TalentNetwork from "@/components/home/talent-network";
import { Footer, Layout } from "@/components/common/layout";

const Home = () => {
  return (
    <Layout>
      <div className="container-home px-[73px]">
        <TalentNetwork />
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default Home;
