import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal/Modal";
import ToDoList from "./component/ToDoList/ToDoList";
import DeleteModal from "./component/DeleteModal/DeleteModal";

function App() {
  const [toDos, setToDos] = useState(
    [
    { id: 1, title: "js", description: "learning Js", completed: false,dueDate: new Date(2026, 0, 24) },
    {
      id: 2,
      title: "deutsch",
      description: "learning Deutsch",
      completed: false,
     dueDate: new Date(2026, 0, 26)
    },
    {
      id: 3,
      title: "Sql",
      description: "learning Sql",
      completed: false,
      dueDate: new Date(2026, 0, 18)
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [editToDo, setEditTodo] = useState(null);
  const handleDeleteModalOpen = () => setDeleteModalOpen(true);
  const handleDeleteModalClose = () => setDeleteModalOpen(false);
  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);
  const handleSave = (data) => {
    if (editToDo === null) {
      setToDos([
        ...toDos,
        {
          id: toDos.length + 1,
          title: data.title,
          description: data.description,
           dueDate:data.dueDate,
          completed: false,
        },
      ]);
    } else {
      setToDos(
        toDos.map((toDo) =>
          toDo.id === editToDo.id ? { ...toDo, ...data, id: editToDo.id } : toDo
        )
      );
      console.log({ editToDo, data });
      //setIsModalOpen(false);
    }
    setIsModalOpen(false);
    setEditTodo(null);
    //console.log(data);
  };
  const handleModalwithItem = (toDo) => {
    setItemToDelete(toDo);
    setDeleteModalOpen(true);
  };
  const handleDelete = (data) => {
    console.log(data.id, "hi");
    setToDos(toDos.filter((item) => item.id !== data.id));
    setDeleteModalOpen(false);
    setItemToDelete(null);
  };
  const handleEdit = (toDo) => {
    setEditTodo(toDo);
    setIsModalOpen(true);
    //setEditTodo(null);
    // console.log(updateTodo);
  };
  const handleToggleComplete = (id) => {
  
    setToDos(
        toDos.map((toDo) =>
          toDo.id === id
            ? { ...toDo, completed: !toDo.completed }
            : toDo
        )
      );
  };
  return (
    <wrapper>
      <h1>To Do App</h1>
      <div className="card">
        <button
          className="add"
          onClick={handleModalOpen}
          style={{ padding: "15px 30px", fontSize: "18px" }}
        >
          Add
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        isClose={handleModalClose}
        onSubmit={handleSave}
        titleModal="to do"
        editItem={editToDo}
      />
      <div className="todo_wrapper">
        <ToDoList
          todos={toDos}
          deletModal={handleDeleteModalOpen}
          handleModalwithItem={handleModalwithItem}
          handleEdit={handleEdit}
          handleToggleComplete={handleToggleComplete}
        />
        <DeleteModal
          isClose={handleDeleteModalClose}
          isOpen={deleteModalOpen}
          handleDelete={handleDelete}
          deletToDo={itemToDelete}
        />
      </div>
    </wrapper>
  );
}

export default App;
