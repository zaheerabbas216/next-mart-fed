import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import OffersCarousel from "../components/OffersCarousel/OffersCarousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h4>Next Mart</h4>
      <OffersCarousel />
    </>
  );
}
