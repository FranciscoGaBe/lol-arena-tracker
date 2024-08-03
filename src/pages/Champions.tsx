import { useState } from 'react';

import ChampionSearch from '../components/ChampionSearch';
import ChampionsList from '../components/ChampionsList';

const Champions = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative p-4">
      <ChampionSearch value={query} onChange={setQuery} />
      <ChampionsList query={query} />
    </div>
  );
};

export default Champions;
