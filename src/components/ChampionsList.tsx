import { useSearchParams } from 'react-router-dom';

import { useFetchChampions } from '../hooks/useFetchChampions';
import { useTracker } from '../hooks/useTracker';
import ChampionListItem from './ChampionListItem';
import Error from './Error';
import Loading from './Loading';

const ChampionsList = () => {
  const { champions, error, loading, refetch } = useFetchChampions();
  const { champions: championsWon, update } = useTracker();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') || '';
  const query = searchParams.get('query') || '';

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} refresh={refetch} />;
  }

  const filteredChampions = champions.filter(({ id, name }) => {
    if (name.toLowerCase().indexOf(query.toLowerCase()) < 0) return false;
    if (!status) return true;
    return status === 'won' ? championsWon.has(id) : !championsWon.has(id);
  });

  return (
    <div className="mx-auto mt-4 max-w-4xl">
      <div className="flex items-center gap-2 px-8">
        <div className="bg-gradient-to-tr from-cyan-600 to-yellow-400 bg-clip-text font-bold text-transparent">
          Arena God Progress:
        </div>
        <div className="flex items-center gap-1">
          <div className="font-semibold text-yellow-400">
            {championsWon.size}
          </div>
          <div className="text-cyan-800">/</div>
          <div className="font-semibold text-cyan-600">{champions.length}</div>
        </div>
      </div>
      <div className="flex flex-wrap items-center p-2">
        {filteredChampions.map((champion) => (
          <div
            key={champion.id}
            className="relative aspect-[308/400] w-1/2 max-w-[308px] overflow-hidden p-2 sm:w-1/3 md:w-1/4 lg:w-1/5"
          >
            <ChampionListItem
              champion={champion}
              won={championsWon.has(champion.id)}
              onClick={() => update(champion.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChampionsList;
