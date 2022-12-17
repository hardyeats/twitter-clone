import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <ul className={styles.headerList}>
        <li className={styles.brandIcon}>
          <i className="fa-brands fa-twitter"></i>
        </li>
        <li>
          <i className="fa-sharp fa-solid fa-hashtag"></i>
        </li>
        <li>
          <i className="fa fa-gear"></i>
        </li>
      </ul>
    </header>
  );
};

export default Header;
