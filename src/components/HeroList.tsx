import React from "react";
import { Hero, TypeCardHero } from "../types/Hero";
import HeroCard from "./HeroCard";
import styles from "../styles/HeroList.module.scss";

interface HeroListProps {
  heroes: Hero[];
}

const HeroList: React.FC<HeroListProps> = ({ heroes }) => {
  return (
    <div className={styles.grid}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} typeCardHero={TypeCardHero.Short} />
      ))}
    </div>
  );
};

export default HeroList;
