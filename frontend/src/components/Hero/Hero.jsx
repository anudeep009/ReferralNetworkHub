import HeroImg from "../../assets/hero.svg";
import styles from "./Hero.module.css";
import { Button } from "@mui/material";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroParent}>
        <img
          src={HeroImg}
          alt="Mobile Hero Image"
          className={styles.smallHero}
        />
        <div className={styles.infos}>
          <p className={styles.welcome}>Welcome to</p>
          <p className={styles.referral}>Referral Network..!</p>
          <p className={styles.info}>
            Connecting Professionals, Streamlining Referrals
          </p>
          <Button
            variant="contained"
            endIcon={<ArrowIcon />}
            className={styles.joinNow}
          >
            Join Now
          </Button>{" "}
        </div>
      </div>

      <div className={styles.hero}>
        <img src={HeroImg} alt="Hero Image" />
      </div>
    </div>
  );
};

export default Hero;
