import Icon from "@/components/Icon";
import styles from "./page.module.scss";
import AnimateIcon from "@/components/AnimateIcon";
import AnimateText from "@/components/AnimateText";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.icons}>
          {[
            { component: <Icon.nextjs /> },
            { component: <Icon.sass /> },
            { component: <Icon.vercel /> },
            { component: <Icon.react /> },
            { component: <Icon.ts /> },
          ].map((icon, index) => (
            <AnimateIcon key={index} delay={0.1 * index}>
              {icon.component}
            </AnimateIcon>
          ))}
        </div>
        <div className={styles.title}>
          <AnimateText
            type="h2"
            text="Full Stack & Machine Learning"
            className={styles["title__top-text"]}
            delay={0.2}
          />
          <AnimateText
            type="h1"
            text="Haneesh Raj B."
            className={styles["title__bottom-text"]}
            delay={0.4}
          />
        </div>

        <div className={styles.subtext}>
          <AnimateText
            type="p"
            text="Full stack developer, Electron specialist, and machine learning engineer, freelancing in web development since 2017."
            className={styles["subtext__text"]}
            delay={0.6}
          />

          <div className={styles["subtext__buttons"]}>
            <Button text={"bruh"} />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
