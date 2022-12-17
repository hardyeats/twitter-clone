import styles from "./Main.module.css";
const Main = () => {
  return (
    <main>
      <label className={styles.search} htmlFor="search-input">
        <div className={styles.searchIcon}>
          <i className="fa fa-magnifying-glass"></i>
        </div>
        <input id="search-input" type="text" placeholder="트위터 검색" />
      </label>
      <div className="tweet-thread"></div>
    </main>
  );
};

export default Main;
