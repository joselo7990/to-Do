import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { agregarFruta, quitarFruta, checkItem } from "../redux/listSlice";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/esm/Button";

function Listado() {
  const [check, setCheck] = useState("");
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const params = useParams();
  const list = useSelector((state) =>
    state.list.find((item) => item.id === params.id)
  );

  const handleCheck = (itemId) => {
    dispatch(checkItem({ itemId: itemId, listId: params.id }));
  };

  const handleDelete = (itemId) => {
    dispatch(quitarFruta({ itemId: itemId, listId: params.id }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      agregarFruta({
        listId: params.id,
        item: {
          name: item,
          id: uuidv4(),
          complete: false,
        },
      })
    );
  };
  return (
    <div className="home container text-start rounded mt-5 pb-1">
      <form className="" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="mt-3"
        />

        <Button type="submit" className="ms-2">
          Create wish
        </Button>
      </form>
      <hr />
      <ul>
        {list.items.map((i) => (
          <li>
            {" "}
            <input
              type="checkbox"
              name=""
              id=""
              value={check}
              checked={i.complete}
              onChange={(e) => setCheck(e.target.value)}
              onClick={() => handleCheck(i.id)}
            />{" "}
            {i.name}
            <Button className="mt-2 ms-2" onClick={() => handleDelete(i.id)}>
              Delete{" "}
            </Button>
          </li>
        ))}
      </ul>
      <Link to={"/"}>
        <h3>Back</h3>{" "}
      </Link>
    </div>
  );
}

export default Listado;
