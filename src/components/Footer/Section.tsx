"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";

import styles from "./styles.module.scss";
import { useRef } from "react";

const Section = ({ list }: { list: { name: string; link: string }[] }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles["footer__section"]}>
      {list.map((item, index: number) => (
        <Link
          href={item.link}
          className={styles["footer__item"]}
          key={`social-${index}`}
        >
          <motion.span
            ref={ref}
            initial={{ y: "100%" }}
            animate={
              isInView
                ? {
                    y: "0%",
                    transition: {
                      duration: 0.7,
                      ease: [0.3, 0, 0, 1],
                      delay: index * 0.2,
                    },
                  }
                : {}
            }
            style={{ display: "inline-block" }}
          >
            {item.name}
          </motion.span>
        </Link>
      ))}
    </div>
  );
};

export default Section;
