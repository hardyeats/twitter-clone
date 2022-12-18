import { Link, useLocation } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  const location = useLocation();
  return (
    <footer className={styles.footer}>
      <Link to="/login" className={`${styles.buttons} ${styles.loginButton}`}>
        로그인
      </Link>
      <Link
        to="/signup"
        state={{ background: location }}
        className={`${styles.buttons} ${styles.registerButton}`}
      >
        가입하기
      </Link>
    </footer>
  );
};

export default Footer;
