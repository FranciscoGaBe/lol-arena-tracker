import ChampionSearch from '../components/ChampionSearch';
import ChampionsList from '../components/ChampionsList';

const Champions = () => {
  return (
    <div className="relative p-4">
      <ChampionSearch />
      <ChampionsList />
    </div>
  );
};

export default Champions;
