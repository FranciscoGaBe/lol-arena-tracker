import { useFetchChampions } from '../hooks/useFetchChampions';
import ChampionListItem from './ChampionListItem';
import Error from './Error';
import Loading from './Loading';

interface Props {
  query: string;
}

const ChampionsList = ({ query }: Props) => {
  const { champions, error, loading, refetch } = useFetchChampions();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} refresh={refetch} />;
  }

  const filteredChampions = champions.filter(
    ({ name }) => name.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );

  return (
    <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center p-2">
      {filteredChampions.map((champion) => (
        <div
          key={champion.id}
          className="relative aspect-[308/400] w-1/2 max-w-[308px] overflow-hidden p-2 sm:w-1/3 md:w-1/4 lg:w-1/5"
        >
          <ChampionListItem champion={champion} />
        </div>
      ))}
    </div>
  );
};

export default ChampionsList;
