import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

const Card = ({ nombre }) => {
  const navigate = useNavigate();


//   const handleDeleteClick = async () => {
//     const response = await deleteGame(id);
//     if (response.ok) {
//       refreshGames();
//     }
//   };

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{nombre}</h2>
        <div className="card-wrapp-buttons">
          <button className="card-button" >
            Detalle
          </button>
          <button className="card-button" >
            Borrar
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;