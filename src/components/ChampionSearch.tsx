import type { FormEvent } from 'react';

interface Props {
  value: string;
  onChange: (query: string) => void;
}

const ChampionSearch = ({ value, onChange }: Props) => {
  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value);
  };

  return (
    <div className="relative flex items-center justify-center">
      <input
        className="w-96 rounded-full border border-cyan-800 bg-transparent px-4 py-1 text-cyan-300 outline-none placeholder:text-cyan-700"
        type="search"
        value={value}
        placeholder="Search champion..."
        onInput={handleSearch}
      />
    </div>
  );
};

export default ChampionSearch;
