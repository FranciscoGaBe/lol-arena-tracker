import { useState } from 'react';

import ChampionSearch from '../components/ChampionSearch';
import ChampionsList from '../components/ChampionsList';

const Champions = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="relative p-4">
      <div className="fixed inset-0 bg-gradient-to-b from-cyan-950 via-cyan-900 to-cyan-400">
        &nbsp;
      </div>
      <ChampionSearch value={query} onChange={setQuery} />
      <ChampionsList query={query} />
    </div>
  );
};

export default Champions;
