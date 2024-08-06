interface Props {
  current: number;
  total: number;
}

interface ProgressTick {
  name: string;
  color: string;
  threshold: number;
}

const progressTicks: ProgressTick[] = [
  {
    name: 'Iron',
    color: '#B69D9C',
    threshold: 3,
  },
  {
    name: 'Bronze',
    color: '#D29681',
    threshold: 6,
  },
  {
    name: 'Silver',
    color: '#A1AEC1',
    threshold: 12,
  },
  {
    name: 'Gold',
    color: '#ECBC83',
    threshold: 20,
  },
  {
    name: 'Platinum',
    color: '#87D5A4',
    threshold: 32,
  },
  {
    name: 'Diamond',
    color: '#74A2C7',
    threshold: 45,
  },
  {
    name: 'Master',
    color: '#E14FFF',
    threshold: 60,
  },
];

const ChallengeProgress = ({ current, total }: Props) => {
  const lastRank = progressTicks.slice(-1)[0];
  const getFullPercentage = (value: number) =>
    `${(value / lastRank.threshold) * 100}%`;

  const nextRankIndex = progressTicks.findIndex(
    (tick) => tick.threshold > current,
  );
  const rank = progressTicks[
    (nextRankIndex > -1 ? nextRankIndex : progressTicks.length) - 1
  ] ?? { color: 'rgb(34,211,238)' };
  const currentPercentage = getFullPercentage(current);

  return (
    <>
      <div
        className="relative mt-8 h-7 rounded-full border-2 border-cyan-800 px-4"
        style={{ backgroundColor: rank.color }}
      >
        {parseInt(currentPercentage, 10) < 100 && (
          <div className="absolute inset-y-0 right-0 w-4 rounded-r-full bg-cyan-900">
            &nbsp;
          </div>
        )}
        {parseInt(currentPercentage, 10) === 0 && (
          <div className="absolute inset-y-0 left-0 w-4 rounded-l-full bg-cyan-900">
            &nbsp;
          </div>
        )}
        <div className="relative h-full rounded-full">
          <div
            className="absolute inset-y-0 right-0 bg-cyan-900"
            style={{
              width: `calc(100% - ${currentPercentage})`,
            }}
          >
            &nbsp;
          </div>
          {progressTicks.map((tick) => (
            <div
              key={tick.name}
              className="absolute inset-y-0"
              title={tick.name}
              style={{
                left: getFullPercentage(tick.threshold),
                opacity: current > tick.threshold ? 1 : 0.5,
              }}
            >
              <div
                className="h-full w-1"
                style={{
                  backgroundColor: tick.color,
                }}
              >
                &nbsp;
              </div>
              <div
                className="absolute -left-2.5 bottom-[calc(100%+2px)] size-6 rounded-full"
                style={{
                  backgroundColor: tick.color,
                }}
              >
                <div className="flex size-full items-center justify-center rounded-full border-2 border-black/40 bg-black/30">
                  <div
                    className="size-2.5 rounded-full"
                    style={{
                      backgroundColor: tick.color,
                    }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-1 font-bold text-black">
            <div>{current}</div>
            <div>/</div>
            <div>{total}</div>
          </div>
        </div>
      </div>
      <div
        className="mt-4 flex flex-col items-center justify-center px-8"
        style={{ opacity: getFullPercentage(current) }}
      >
        {parseInt(currentPercentage, 10) >= 100 && (
          <div className="font-semibold text-cyan-600">
            Congratulations!, you are now an{' '}
          </div>
        )}
        <div className="bg-gradient-to-tr from-cyan-600 to-yellow-400 bg-clip-text text-4xl font-bold text-transparent">
          Arena God
        </div>
      </div>
    </>
  );
};

export default ChallengeProgress;
