import { type Champion, getChampionLoadingImageUrl } from '../utils/dataDragon';

interface Props {
  champion: Champion;
}

const ChampionListItem = ({ champion: { id, name } }: Props) => {
  return (
    <div className="relative size-full">
      <img
        className="absolute inset-0"
        src={getChampionLoadingImageUrl(id)}
        alt={name}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black to-transparent px-2 pb-2 pt-5 text-white">
        <div className="text-xl font-bold">{name}</div>
      </div>
    </div>
  );
};

export default ChampionListItem;
