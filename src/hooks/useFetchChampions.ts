import { useEffect, useState } from 'react';

import type { Champion } from '../utils/dataDragon';
import { getChampions } from '../utils/dataDragon';

interface Output {
  loading: boolean;
  champions: Champion[];
  error: string;
  refetch: () => Promise<void>;
}

export const useFetchChampions = (): Output => {
  const [champions, setChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchChampions = async () => {
    setLoading(true);
    setError('');
    try {
      setChampions(await getChampions());
      setLoading(false);
    } catch (err) {
      setError('Something went wrong while fetching champion data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  return {
    champions,
    loading,
    error,
    refetch: fetchChampions,
  };
};
