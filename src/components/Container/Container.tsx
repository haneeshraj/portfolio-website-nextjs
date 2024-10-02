"use client";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./styles.module.scss";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles["container"]}>
        <Navbar />
        <main className={styles["main"]}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
