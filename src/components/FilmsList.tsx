import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilm } from "../redux/filmsSlice";
import { RootState } from "../redux/store";
import StarshipList from "./StarshipList";
import styles from "../styles/FilmsPage.module.scss";

interface FilmListProps {
  filmIds: number[];
}

const FilmList: React.FC<FilmListProps> = ({ filmIds }) => {
  const dispatch = useDispatch();
  const { selectedFilmTitles } = useSelector((state: RootState) => ({
    films: state.films.films,
    selectedFilmTitles: state.films.selectedFilmTitles,
  }));

  const [selectedFilmId, setSelectedFilmId] = useState<number | null>(null);

  useEffect(() => {
    if (filmIds.length) {
      dispatch(setSelectedFilm(filmIds));
    }
  }, [dispatch, filmIds]);

  function handleFilmClick(filmId: number): void {
    setSelectedFilmId((prevId) => (prevId === filmId ? null : filmId));
  }

  return (
    <div>
      <ul className={styles.filmList}>
        {selectedFilmTitles.length > 0 ? (
          <ul className={styles.filmList}>
            {selectedFilmTitles.map((film) =>
              film ? (
                <li key={film.id} className={styles.filmItem}>
                  <div onClick={() => handleFilmClick(film.id)}>
                    {film.title}
                  </div>
                  {selectedFilmId === film.id && (
                    <div
                      className={`${styles.starshipListWrapper} ${
                        selectedFilmId === film.id ? styles.open : ""
                      }`}
                    >
                      <StarshipList starshipIds={film.starships} />
                    </div>
                  )}
                </li>
              ) : null
            )}
          </ul>
        ) : (
          <p className={styles.noFilmsMessage}>
            No films available for this hero.
          </p>
        )}
      </ul>
    </div>
  );
};

export default FilmList;
