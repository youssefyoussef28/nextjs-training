import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <br></br>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum
        itaque consequatur dolorem blanditiis, magnam sit maxime repudiandae non
        omnis! Illum fuga ullam unde vel saepe modi distinctio in quod?
      </p>
      <br></br>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cum
        itaque consequatur dolorem blanditiis, magnam sit maxime repudiandae non
        omnis! Illum fuga ullam unde vel saepe modi distinctio in quod?
      </p>
      <br></br>
      <Link href={"/ninjas"}>See Ninja Listing</Link>
      {/* <Footer /> */}
    </>
  );
}