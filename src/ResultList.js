import React, { useState, useEffect } from "react";
import ResultListItem from "./ResultListItem";

export default () => {
  const [results, setResults] = useState(null);
  useEffect(() => {
    fetch("https://fakecarsapi.appspot.com/")
      .then(res => res.json())
      .then(data => setResults(data));
  }, []);

  return results ? (
    <ul>
      {results.map(({ title, price, mileage, image }) => (
        <ResultListItem
          title={title}
          price={price}
          mileage={mileage}
          image={image}
        />
      ))}
    </ul>
  ) : (
    <p>Loading, please wait…</p>
  );
};
