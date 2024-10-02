"use client";

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

import Logo from "../Logo/Logo";
import styles from "./styles.module.scss";
import { NavItem, navItems } from "@/utils/navItems";

const Navbar = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const navControls = useAnimation();
  const logoControls = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    navControls.start({
      y: "0%",
      transition: { duration: 0.6, ease: [0.24, 0, 0, 1] },
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled down
      if (currentScrollY > lastScrollY) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navControls]);

  useEffect(() => {
    if (scrolledDown) {
      navControls.start({
        y: "-100%",
        transition: { duration: 0.6, ease: [0.24, 0, 0, 1] },
      });
    } else {
      navControls.start({
        y: "0%",
        transition: { duration: 0.6, ease: [0.24, 0, 0, 1] },
      });
    }
  }, [scrolledDown, navControls, logoControls]);

  return (
    <motion.div
      className={styles["navbar"]}
      initial={{ y: "-100%" }}
      animate={navControls}
    >
      <Link href="/">
        <motion.div
          className={styles["navbar__logo"]}
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: {
              duration: 1,
              ease: [0.3, 0, 0, 1],
              delay: 0.3,
            },
          }}
        >
          <Logo.hr height={36} width={36} />
        </motion.div>
      </Link>
      <div className={styles["navbar__menu"]}>
        {navItems.map((item: NavItem, wordIndex: number) => {
          const letters = item.name.split("");

          return (
            <Link href={item.link} key={`navitem-${wordIndex}`}>
              <div className={styles["navbar__item"]}>
                {letters.map((letter: string, index: number) => {
                  return (
                    <motion.span
                      key={`navitem-${index}`}
                      className={styles["navbar__item-letter"]}
                      initial={{ y: "100%" }}
                      animate={{
                        y: "0%",
                        transition: {
                          duration: 0.6,
                          ease: [0.24, 0, 0, 1],
                          delay: wordIndex * 0.7 + 0.1 * index,
                        },
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Navbar;
