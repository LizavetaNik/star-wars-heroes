import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroList from "../components/HeroList";
import { Button } from "../components/ui/Button";
import styles from "../styles/Main.module.scss";
import { fetchHeroes, setPage } from "../redux/heroesSlice";
import { RootState, AppDispatch } from "../redux/store";
import { fetchFilms } from "../redux/filmsSlice";
import { fetchStarships } from "../redux/starshipsSlice";

const HeroesPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { heroes, count, page, loading } = useSelector(
    (state: RootState) => state.heroes
  );

  useEffect(() => {
    dispatch(fetchHeroes(page));
    dispatch(fetchFilms());
    dispatch(fetchStarships());
  }, [dispatch, page]);

  return (
    <div className={styles.appWrapper}>
      <h1>Star Wars Heroes</h1>
      {loading && <p>Loading...</p>}
      <div className={styles.heroListWrapper}>
        <HeroList heroes={heroes} />
      </div>
      <div className={styles.pagination}>
        <Button
          text="Last"
          onClick={() => dispatch(setPage(page - 1))}
          disabled={page === 1}
        />
        <Button
          text="Next"
          onClick={() => dispatch(setPage(page + 1))}
          disabled={page === count}
        />
      </div>
    </div>
  );
};

export default HeroesPage;
