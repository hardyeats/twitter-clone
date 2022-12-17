import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/login" className={`${styles.buttons} ${styles.loginButton}`}>
        로그인
      </Link>
      <Link
        to="/signup"
        className={`${styles.buttons} ${styles.registerButton}`}
      >
        가입하기
      </Link>
    </footer>
  );
};

export default Footer;
