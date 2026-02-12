import { useEffect, useState } from "react";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import "./Modal.css";

const Modal = ({ isOpen, isClose, onSubmit, titleModal, editItem }) => {
  // if (!isOpen) return null;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(null);
  // const handleSubmit = (e) => {
  //   e.preventDefault;
  //   onSubmit({ title, description });
  //   setTitle(""), setDescription(""), isClose();
  // };
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDescription(editItem.description);
      setDueDate(editItem.dueDate ? new Date(editItem.dueDate) : null);
    } else {
      setTitle("");
      setDescription("");
      setDueDate(null);
    }
  }, [editItem]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, dueDate });
    console.log({ dueDate });

    // setTitle("");
    // setDescription("");
    // setDueDate("")
    //isClose();
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={isClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{titleModal}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Due Date</label>
            <DatePickerInput
              value={dueDate}
              onChange={(date) => setDueDate(date)}
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="btn-primary">
              Save
            </button>
            <button type="button" onClick={isClose} className="btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Modal;
