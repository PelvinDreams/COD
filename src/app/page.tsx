import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Work from "@/components/Home/Work";
import Table from "@/components/Home/Table";
import Features from "@/components/Home/Features";
import Trade from "@/components/Home/Trade";
import Simple from "@/components/Home/Simple";
import Faq from "@/components/Home/Faq";
import Header from "@/components/Layout/Header/index";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "COD",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Companies />
        <Work />
        <Table />
        <Features />
        <Simple />
        <Trade />
        <Faq />
      </main>
    </>
  );
}
