import React from "react";
import { agregarFruta, quitarFruta } from "../redux/listSlice";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Frutas = function () {
  const list = useSelector((state) => state.list);
  const [fruts, setFruts] = React.useState("");
  const dispatch = useDispatch();
  return (
    <div className="text-center home container text-start rounded mt-5 pb-1">
      <h2>Listado de Frutas</h2>

      <form
        action=""
        value={fruts}
        onSubmit={(event) => {
          event.preventDefault(); //se queda lo que ya seteaste, para que no se actualize
          dispatch(agregarFruta({ id: uuidv4(), name: fruts }));
        }}
      >
        <input
          type="text"
          value={fruts}
          onChange={(event) => setFruts(event.target.value)}
        />

        <button type="submit" className="btn btn-primary ms-2">
          {" "}
          Agregar
        </button>
      </form>
      <ul>
        {list.map((item) => (
          <li key={item.id} className="list-none">
            {item.name}{" "}
            <i
              class="bi bi-trash3"
              type="submit"
              onClick={() => dispatch(quitarFruta(item.id))}
            ></i>
          </li>
        ))}
      </ul>
      <Link to={"/"}>
        <div>
          {" "}
          <i class="bi bi-arrow-left"></i>Volver a la Home
        </div>
      </Link>
    </div>
  );
};

export default Frutas;
