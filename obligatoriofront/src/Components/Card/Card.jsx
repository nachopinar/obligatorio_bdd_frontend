import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

// const deleteGame = async (id) => {
//   const gameDelete = await fetch("http://localhost:3000/api/games/" + id, {
//     method: "DELETE",
//   });

//   return gameDelete;
// };

const Card = ({ nombre, id, descripcion, url_imagen }) => {
  // const navigate = useNavigate();

  // const handleDetailsClick = () => {
  //   navigate(`/details/${id}`);
  // };

  // const handleDeleteClick = async () => {
  //   const response = await deleteGame(id);
  //   if (response.ok) {
  //     refreshGames();
  //   }
  // };

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{nombre}</h2>
        <p>{descripcion}</p>
        {url_imagen && (
          <img src={url_imagen} alt={nombre} className="card-image" />
        )}
        <div className="card-wrapp-buttons">
          <button className="card-button">Detalle</button>
          <button className="card-button">Borrar</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
