import React from "react";
import { Hero } from "../types/Hero";
import styles from "../styles/HeroCard.module.scss";

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className={styles.gridItem}>
      <h3>{hero.name}</h3>
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
    </div>
  );
};

export default HeroCard;
