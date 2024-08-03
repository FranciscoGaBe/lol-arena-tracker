import { type Champion, getChampionLoadingImageUrl } from '../utils/dataDragon';

interface Props {
  champion: Champion;
}

const ChampionListItem = ({ champion: { id, name } }: Props) => {
  return (
    <div className="relative size-full border border-yellow-800">
      <img
        className="size-full object-cover object-top"
        src={getChampionLoadingImageUrl(id)}
        alt={name}
      />
      <div className="absolute inset-x-0 bottom-0 border-t border-yellow-800 bg-black/80 p-2 text-white">
        <div className="text-xl font-bold">{name}</div>
      </div>
    </div>
  );
};

export default ChampionListItem;
