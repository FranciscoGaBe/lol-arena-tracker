import { useState } from 'react';

interface Output {
  update: (championId: string) => void;
  champions: Set<string>;
}

const TRACKER_STORAGE_KEY = 'champions';

const getChampionsSet = (): Set<string> => {
  try {
    return new Set<string>(
      JSON.parse(window.localStorage.getItem(TRACKER_STORAGE_KEY) ?? '[]'),
    );
  } catch (error) {
    return new Set();
  }
};

export const useTracker = (): Output => {
  const [champions, setChampions] = useState(getChampionsSet());

  const update = (championId: string) => {
    const updatedChampions = getChampionsSet();
    if (updatedChampions.has(championId)) {
      updatedChampions.delete(championId);
    } else {
      updatedChampions.add(championId);
    }
    window.localStorage.setItem(
      TRACKER_STORAGE_KEY,
      JSON.stringify(Array.from(updatedChampions.values())),
    );
    setChampions(updatedChampions);
  };

  return {
    champions,
    update,
  };
};
