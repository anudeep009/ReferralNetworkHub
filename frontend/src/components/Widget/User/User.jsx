import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./User.module.css";
import { ReactComponent as UserSvg } from "../../../assets/svg/user.svg";
import { BiUser } from "react-icons/bi";
import { LuLifeBuoy } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { ThemeContext } from "../../../context/ThemeProvider/ThemeProvider";
import { clearUserData } from "../../../utility/userPersistence";
import {ToggleThemeSwitcher, ThemeSwitcher} from "../../Buttons/ThemeSwitcher/ThemeSwitcher";

const Widget = React.forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUserData();
    navigate("/login");
  };

  const handleMyAccount = () => {
    navigate("/MyAccount");
  };

  return (
    <div className={styles.widgetContainer} ref={ref}>
      <div className={styles.profileSection}>
        <div className={styles.profileImage}>
          <UserSvg className={styles.userSvg} />
        </div>
        <div className={styles.profileDetails}>
          <h2 className={styles.profileName}>Name</h2>
          <p className={styles.profileLocation}>Pune, Maharashtra</p>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.menuItem} onClick={handleMyAccount}>
        <BiUser className={styles.icon} />
        <span>My Account</span>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.menuItems}>
        <HiOutlineLightBulb className={styles.themeIcon} />
        <span>Dark Theme</span>
        <ToggleThemeSwitcher />
      </div>
      <div className={styles.menuItems}>
        <LuLifeBuoy className={styles.helpIcon} />
        <span>Help</span>
      </div>
      <div className={styles.menuItems} onClick={handleLogout}>
        <FiLogOut className={styles.logoutIcon} />
        <span>Log out</span>
      </div>
    </div>
  );
});

export default Widget;
