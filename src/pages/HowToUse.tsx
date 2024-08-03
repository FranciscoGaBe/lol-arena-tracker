import type { FormEvent } from 'react';
import { useState } from 'react';

import { TRACKER_STORAGE_KEY } from '../hooks/useTracker';

const HowToUse = () => {
  const storedData = window.localStorage.getItem(TRACKER_STORAGE_KEY) ?? '';
  const [importValue, setImportValue] = useState('');
  const [file] = useState(`data:text/plain;charset=utf-8,${storedData}`);

  const handleLoad = () => {
    window.localStorage.setItem(TRACKER_STORAGE_KEY, importValue);
    setImportValue('');
  };

  const handleFileInput = (event: FormEvent<HTMLInputElement>) => {
    const textFile = event.currentTarget.files?.item(0);
    if (!textFile) return;

    const fileReader = new FileReader();
    fileReader.addEventListener('load', (e) => {
      const buffer = e.target?.result;
      if (!buffer) return;
      if (typeof buffer === 'string') {
        window.localStorage.setItem(TRACKER_STORAGE_KEY, buffer ?? '[]');
        return;
      }

      const textDecoder = new TextDecoder();

      window.localStorage.setItem(
        TRACKER_STORAGE_KEY,
        textDecoder.decode(buffer) ?? '[]',
      );
    });
    fileReader.readAsText(textFile);
  };

  return (
    <div className="mx-auto max-w-3xl p-4 text-white">
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">
          What is the Arena Tracker for
        </h2>
        <p className="px-2">
          The main objective of this app is to keep track of the progress
          towards the &quot;Arena God&quot; challenge in League of Legends.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">How to use</h2>
        <p className="px-2">
          Click on the champions that you have won with in Arena, this way you
          can easily see and track which champions you are missing towards the
          &quot;Arena God&quot; challenge.
        </p>
        <p className="px-2 pt-2 font-semibold italic">
          All the data is stored locally within your browser, clearing the cache
          will delete the stored information.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">
          How can I check which champions I have already won with in Arena
        </h2>
        <p className="px-2">
          On the LoL client, go to your{' '}
          <span className="font-bold italic">Profile</span> by clicking on your
          summoner icon, then navigate to{' '}
          <span className="font-bold italic">Challenges</span>,{' '}
          <span className="font-bold italic">Legacy</span> and look for the{' '}
          <span className="font-bold italic">Arena God</span> challenge.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Export data</h2>
        <div className="px-2">
          <a
            className="rounded-full bg-cyan-950 px-3 py-1 text-cyan-300"
            href={file}
            download="lol-arena-tracker-data.txt"
          >
            Download the data
          </a>
          <div className="mt-2 flex items-center gap-2">
            <div className="shrink-0">Copy the data:</div>
            <input
              className="grow rounded-full border border-cyan-700 bg-cyan-950 px-2 py-1 text-cyan-300 outline-none focus:border-cyan-300"
              type="text"
              defaultValue={storedData}
              readOnly
              onFocus={(e) => e.target.select()}
            />
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold">Import data</h2>
        <div className="px-2">
          <input
            type="file"
            className="file:rounded-full file:border-none file:bg-cyan-950 file:px-3 file:py-1 file:text-cyan-300 file:outline-none"
            onInput={handleFileInput}
          />
          <div className="mt-2 flex items-center gap-2">
            <div className="shrink-0">Paste the data:</div>
            <input
              className="grow rounded-full border border-cyan-700 bg-cyan-950 px-2 py-1 text-cyan-300 outline-none focus:border-cyan-300"
              type="text"
              value={importValue}
              onInput={(e) =>
                setImportValue((e.target as HTMLInputElement).value)
              }
            />
            <button
              className="shrink-0 rounded-full bg-cyan-950 px-3 py-1"
              type="button"
              onClick={handleLoad}
            >
              Load
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;
