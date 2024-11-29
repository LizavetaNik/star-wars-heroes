// StarshipList.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setSelectedStarship } from "../redux/starshipsSlice";

interface StarshipListProps {
  starshipIds: number[];
}

const StarshipList: React.FC<StarshipListProps> = ({ starshipIds }) => {
  const dispatch = useDispatch();
  const { selectedStarshipTitles } = useSelector((state: RootState) => ({
    selectedStarshipTitles: state.starships.selectedStarshipTitles,
  }));

  useEffect(() => {
    if (starshipIds.length) {
      dispatch(setSelectedStarship(starshipIds));
    }
  }, [dispatch, starshipIds]);

  return (
    <div>
      <h3>Starships</h3>
      <ol>
        {selectedStarshipTitles.length > 0 ? (
          selectedStarshipTitles.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        ) : (
          <li>without starships</li>
        )}
      </ol>
    </div>
  );
};

export default StarshipList;
