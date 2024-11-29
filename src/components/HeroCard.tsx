import React from "react";
import { Hero, TypeCardHero } from "../types/Hero";
import { AppLink } from "./ui/AppLink";
import styles from "../styles/HeroCard.module.scss";

interface HeroCardProps {
  hero: Hero;
  typeCardHero: TypeCardHero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, typeCardHero }) => {
  return (
    <div className={styles.gridItem}>
      <h3>{hero.name}</h3>

      {typeCardHero === TypeCardHero.Short ? (
        <AppLink to={`/hero/${hero.id}`}>More...</AppLink>
      ) : (
        <>
          <p>
            <strong>Height:</strong> {hero.height} cm
          </p>
          <p>
            <strong>Mass:</strong> {hero.mass} kg
          </p>
          <p>
            <strong>Hair Color:</strong> {hero.hair_color}
          </p>
          <p>
            <strong>Skin Color:</strong> {hero.skin_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {hero.eye_color}
          </p>
          <p>
            <strong>Birth Year:</strong> {hero.birth_year}
          </p>
          <p>
            <strong>Gender:</strong> {hero.gender}
          </p>
          <p>
            <strong>Homeworld:</strong> {hero.homeworld}
          </p>
          <AppLink to={`/hero/${hero.id}/films`}>Show films</AppLink>
        </>
      )}
    </div>
  );
};

export default HeroCard;
