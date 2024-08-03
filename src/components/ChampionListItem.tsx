import { type Champion, getChampionLoadingImageUrl } from '../utils/dataDragon';

interface Props {
  champion: Champion;
  won: boolean;
  onClick: () => void;
}

const ChampionListItem = ({ champion: { id, name }, onClick, won }: Props) => {
  return (
    <button
      type="button"
      className="relative size-full border border-yellow-800"
      onClick={onClick}
    >
      <img
        className="pointer-events-none size-full select-none object-cover object-top"
        src={getChampionLoadingImageUrl(id)}
        alt={name}
      />
      {won && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <div className="font-bold text-green-400 ">Won</div>
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 border-t border-yellow-800 bg-black/80 px-2 py-1 text-white">
        <div className="text-xl font-bold">{name}</div>
      </div>
    </button>
  );
};

export default ChampionListItem;
