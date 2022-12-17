import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button className={styles.loginButton}>로그인</button>
      <button className={styles.registerButton}>가입하기</button>
    </footer>
  );
};

export default Footer;
