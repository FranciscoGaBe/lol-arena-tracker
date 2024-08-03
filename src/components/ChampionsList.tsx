import { useFetchChampions } from '../hooks/useFetchChampions';
import ChampionListItem from './ChampionListItem';
import Error from './Error';
import Loading from './Loading';

const ChampionsList = () => {
  const { champions, error, loading, refetch } = useFetchChampions();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} refresh={refetch} />;
  }

  const filteredChampions = champions.filter(() => true);

  return (
    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center p-2">
      {filteredChampions.map((champion) => (
        <div
          key={champion.id}
          className="aspect-[308/560] max-h-[560px] w-1/2 max-w-[308px] p-2 sm:w-1/3 md:w-1/4 lg:w-1/5"
        >
          <ChampionListItem champion={champion} />
        </div>
      ))}
    </div>
  );
};

export default ChampionsList;
