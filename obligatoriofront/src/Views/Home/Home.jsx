import React, { useState, useEffect } from "react";
import Card from "../../Components/Card/Card";

const getActividades = async () => {
  const response = await fetch("http://127.0.0.1:5000/actividad", {
    method: "GET",
  });

  const actividades = await response.json();
  console.log(actividades);
  console.log("hola");
  return actividades;
};

const Home = () => {
  const [actividades, setActividades] = useState([]);

  const refreshActividades = async () => {
    const actividadex = await getActividades();
    setActividades(actividadex);
  };

  useEffect(() => {
    getActividades();
  }, []);

  return (
    <div>
      {/* Renderiza los datos aquí */}
      {actividades && <div>{JSON.stringify(actividades)}</div>}
      <div className="home-grid-cards">
        {actividades.map((actividad) => (
          <Card
            key={actividad.id}
            nombre={actividad.nombre}
            id={actividad.id}
            refreshActividades={refreshActividades}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
