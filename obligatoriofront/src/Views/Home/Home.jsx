import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getActividades = async () => {
      const response = await fetch("http://127.0.0.1:5000/actividad", {
        method: "GET",
      });

      const result = await response.json();
      setData(result);
      console.log(result);
      console.log("hola");
    };

    getActividades();
  }, []);

  return (
    <div>
      {/* Renderiza los datos aquí */}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Home;
