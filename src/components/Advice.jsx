import useFetch from '../hooks/useFetch';

export default function Advice() {
  const [isLoading, data] = useFetch(
    'https://korean-advice-open-api.vercel.app/api/advice'
  );

  return (
    <>
      {!isLoading && (
        <>
          <div className="advice">{data.message}</div>
          <div className="'advice">-{data.author}</div>
        </>
      )}
    </>
  );
}
