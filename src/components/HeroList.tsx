import React, { useEffect, useState } from "react";
import { Hero } from "../types/Hero";
import { getHeroes } from "../api/swApi";
import styles from "../styles/HeroList.module.scss";
import { Button } from "./ui/Button";
import HeroCard from "./HeroCard";

const HeroList: React.FC = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(82);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        const response = await getHeroes(page);
        setHeroes(response.results);
        setCount(response.count);
      } catch (error) {
        console.error("Failed to fetch heroes:", error);
      }
    };

    fetchHeroes();
  }, [page]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {heroes.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
      <div>
        <Button
          text="Last"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        />
        <Button
          text="Next"
          onClick={() => setPage(page + 1)}
          disabled={page === count}
        />
      </div>
    </div>
  );
};

export default HeroList;
