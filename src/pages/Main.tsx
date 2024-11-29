import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeroList from "../components/HeroList";
import { Button } from "../components/ui/Button";
import { fetchHeroes, setPage } from "../redux/heroesSlice";
import { RootState, AppDispatch } from "../redux/store";
import { fetchFilms } from "../redux/filmsSlice";
import { fetchStarships } from "../redux/starshipsSlice";
import styles from "../styles/Main.module.scss";

const Main: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { heroes, count, page, loading } = useSelector(
    (state: RootState) => state.heroes
  );

  const { films } = useSelector((state: RootState) => state.films);
  const { starships } = useSelector((state: RootState) => state.starships);

  useEffect(() => {
    dispatch(fetchHeroes(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (films.length === 0) dispatch(fetchFilms());
    if (!starships.length) dispatch(fetchStarships());
  }, [dispatch, films.length, starships.length]);

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

export default Main;
