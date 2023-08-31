import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { agregarLista } from "../redux/listSlice";

function Example() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [input, setInput] = useState("");
  return (
    <>
      <i class="bi bi-plus-circle add-button" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="home container text-center rounded mt-5 pb-1">
            New list
          </Modal.Title>
        </Modal.Header>
        <form
          action=""
          onSubmit={(event) => {
            event.preventDefault(); //se queda lo que ya seteaste, para que no se actualize
            dispatch(agregarLista({ id: uuidv4(), name: input, items: [] }));
            handleClose();
          }}
        >
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>

        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
          {/* <Link to={"/"}>
            <Button variant="primary" onClick={handleClose}>
              Crear
            </Button>
          </Link> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
