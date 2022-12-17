import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <button>로그인</button>
      <button>가입하기</button>
    </footer>
  );
};

export default Footer;
