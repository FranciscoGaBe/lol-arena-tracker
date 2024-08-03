interface Props {
  error: string;
  refresh?: () => Promise<void>;
}

const Error = ({ error, refresh }: Props) => {
  return (
    <div>
      <div>{error}</div>
      {refresh && (
        <button type="button" onClick={refresh}>
          Refresh
        </button>
      )}
    </div>
  );
};

export default Error;
