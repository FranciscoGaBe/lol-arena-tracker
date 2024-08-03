import type { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

const ChampionSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    searchParams.set('query', value);
    if (!value) {
      searchParams.delete('query');
    }
    setSearchParams(searchParams);
  };

  const handleStatusChange = (event: FormEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    searchParams.set('status', value);
    if (!value) {
      searchParams.delete('status');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="relative flex items-center justify-center gap-4">
      <input
        className="w-96 rounded-full border border-cyan-700 bg-cyan-950 px-4 py-1 text-cyan-300 outline-none placeholder:text-cyan-700 focus:border-cyan-300"
        type="search"
        defaultValue={searchParams.get('query') ?? ''}
        placeholder="Search champion..."
        onInput={handleSearch}
      />
      <label className="flex items-center gap-1 rounded-full border border-cyan-700 bg-cyan-950 focus-within:border-cyan-300">
        <select
          className="rounded-full bg-cyan-950 px-2 py-1 text-cyan-300 outline-none"
          defaultValue={searchParams.get('status') ?? ''}
          onChange={handleStatusChange}
        >
          <option value="">All</option>
          <option value="won">Won</option>
          <option value="pending">Pending</option>
        </select>
      </label>
    </div>
  );
};

export default ChampionSearch;
