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

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(agregarLista({ id: uuidv4(), name: input, items: [] }));
    handleClose();
  };
  return (
    <>
      <i class="bi bi-plus-circle add-button" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="home container text-center rounded mt-5 pb-1">
            New list
          </Modal.Title>
        </Modal.Header>
        <form action="" onSubmit={(e) => handleCreate(e)}>
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>

        <Modal.Footer>
          <Button variant="primary" onClick={handleCreate}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
