"use client";

import { AnimatePresence, motion } from "framer-motion";
import { NavItem, navItems } from "@/utils/navItems";

import styles from "./styles.module.scss";
import Logo from "../Logo/Logo";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";

const Navbar = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <div className={styles["navbar"]}>
      <motion.div className={styles["navbar__logo"]}>
        <Logo.hr />
      </motion.div>
      <motion.div className={styles["navbar__list"]}>
        {navItems.map((item: NavItem, index: number) => {
          return (
            <motion.div key={index} className={styles["navbar__item"]}>
              <Link
                href={item.link}
                style={{ display: "inline-block" }}
                className={styles["navbar__item-name"]}
              >
                <span
                  onMouseEnter={
                    item.dropdown ? () => setDropDownOpen(true) : undefined
                  }
                  onMouseLeave={
                    item.dropdown ? () => setDropDownOpen(false) : undefined
                  }
                >
                  {item.name}
                </span>
              </Link>
              <AnimatePresence>
                {dropDownOpen && item.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, marginTop: "-1rem", zIndex: 1001 }}
                    animate={{
                      opacity: 1,
                      marginTop: "0rem",
                      transition: { duration: 0.3, ease: [0.3, 0, 0, 1] },
                    }}
                    exit={{
                      opacity: 0,
                      marginTop: "-1rem",
                      transition: { duration: 0.3, ease: [0.3, 0, 0, 1] },
                    }}
                    className={clsx(styles["navbar__dropdown"], {
                      [styles["navbar__dropdown--open"]]: dropDownOpen,
                    })}
                    onMouseEnter={
                      item.dropdown ? () => setDropDownOpen(true) : undefined
                    }
                    onMouseLeave={
                      item.dropdown ? () => setDropDownOpen(false) : undefined
                    }
                  >
                    {item.dropdown.map((subItem: NavItem, index: number) => {
                      return (
                        <motion.div
                          key={index}
                          className={styles["navbar__dropdown-item"]}
                        >
                          <Link
                            href={subItem.link}
                            style={{ display: "inline-block" }}
                            className={styles["navbar__dropdown-name"]}
                          >
                            <span>{subItem.name}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Navbar;
