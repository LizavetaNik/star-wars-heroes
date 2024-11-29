import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FilmList from "../components/FilmsList";
import { AppLink } from "../components/ui/AppLink";
import styles from "../styles/FilmsPage.module.scss";

const FilmsPage: React.FC = () => {
  const selectedHero = useSelector(
    (state: RootState) => state.heroes.selectedHero
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Films {selectedHero?.name}</h1>
      {selectedHero && selectedHero.films.length > 0 ? (
        <FilmList filmIds={selectedHero?.films} />
      ) : (
        <p className={styles.noFilmsMessage}>
          No films available for this hero.
        </p>
      )}
      <AppLink to={`/`}>Come back</AppLink>
    </div>
  );
};

export default FilmsPage;
