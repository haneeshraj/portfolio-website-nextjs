"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import styles from "./styles.module.scss";

import { NavItem, navItems } from "./navItems";
import Logo from "../Logo";
import ThemeSwitcher from "../ThemeProvider";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Change the state when the user scrolls past 300 pixels
    if (window.scrollY > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        styles["nav"],
        {
          [styles["nav--detach"]]: !isScrolled,
        },
        {
          [styles["nav--attach"]]: isScrolled,
        }
      )}
    >
      <motion.div
        className={clsx(
          styles["nav__logo"],
          {
            [styles["nav__logo--detached"]]: !isScrolled,
          },
          {
            [styles["nav__logo--attached"]]: isScrolled,
          }
        )}
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1, ease: "linear" },
        }}
      >
        <Logo.hr />
      </motion.div>
      <div className={styles["nav__list"]}>
        {navItems.map((item: NavItem, index: number) => (
          <Link href={item.link} key={index} className={styles["nav__item"]}>
            <motion.span
              initial={{ y: "100%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: 0.7,
                  ease: [0.3, 0, 0, 1],
                  delay: index * 0.2,
                },
              }}
              style={{ display: "inline-block" }}
            >
              {item.name}
            </motion.span>
          </Link>
        ))}
        <motion.div
          className={styles["nav__item"]}
          style={{ display: "inline-block", height: "fit-content" }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.7, ease: [0.3, 0, 0, 1], delay: 1 },
          }}
        >
          <ThemeSwitcher />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
