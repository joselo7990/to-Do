// import Frutas from "./ListadoDeFrutas";
import { useSelector, useDispatch } from "react-redux";
import Example from "./Modal";
import { eliminarLista } from "../redux/listSlice";
import { format, parseISO } from "date-fns";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const HackList = function () {
  const lists = useSelector((state) => state.list);
  const date = parseISO("2023-08-22T12:00:00Z");
  const formattedDate = format(date, "dd-MM-yyyy");

  const dispatch = useDispatch();

  const handleDelete = (list) => {
    dispatch(eliminarLista({ lists: lists.name }));
  };

  return (
    <div className="home container text-start rounded mt-5 pb-1">
      <div>
        <h1 className="f-1 pt-3 text-center">To Do-List</h1>
        {lists.map((list) => (
          <div className="bg-white rounded mb-2 pb-3 bt-1 shadow-sm ms-2">
            <Link to={`/listas/${list.id}`}>
              <h3 className="ms-2 text-dark">{list.name}</h3>
            </Link>
            <p className="ms-2">Created at : {formattedDate} </p>
            {
              <Button variant="primary" className="ms-2">
                Delete
              </Button>
            }
          </div>
        ))}
        <Example />
      </div>
    </div>
  );
};

export default HackList;
