import React from "react";
import HeroList from "./components/HeroList";
import styles from "./styles/App.module.scss";

const App: React.FC = () => {
  return (
    <div className={styles.appWrapper}>
      <h1>Star Wars Heroes</h1>
      <HeroList />
    </div>
  );
};

export default App;
