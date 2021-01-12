import React from "react";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
const UseStatsGraps = React.lazy(() => import("./UseStatsGraps"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatisticas" />;
        <UseStatsGraps data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStats;
