import React from "react";
import styles from "./UseStatsGraps.module.css";

const UseStatsGraps = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    console.log(data);
    setTotal(
      data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0)
    );
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div>
        <p className={styles.total}>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UseStatsGraps;
