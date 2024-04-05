import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["container"]}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
