import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

function CountryFlag() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  console.log(data && data[0]);
  return (
    <div style={{ padding: 20 }}>
      {loading && <p>Data Loading....</p>}
      <div className="row">
        {data &&
          data.map((data) => (
            <Card img={data.flags.png} name={data.name.common} />
          ))}
      </div>
    </div>
  );
}

export default CountryFlag;
