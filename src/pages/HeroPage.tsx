import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TypeCardHero } from "../types/Hero";
import HeroCard from "../components/HeroCard";
import { setSelectedHero } from "../redux/heroesSlice";

const HeroPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const hero = useSelector((state: any) => state.heroes.selectedHero);

  useEffect(() => {
    if (id) {
      dispatch(setSelectedHero(Number(id)));
    }
  }, [dispatch, id]);

  if (!hero) {
    return <div>No hero found</div>;
  }

  return (
    <div>
      <HeroCard hero={hero} typeCardHero={TypeCardHero.Full} />
    </div>
  );
};

export default HeroPage;
