import "../Modal/Modal.css"
const DeleteModal = ({isClose,isOpen, handleDelete,deletToDo}) => {
    if(!isOpen) return null;

  return (
    <div className="modal-overly-d" onClick={isClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Delete To Do</h2>
        <h3>Are you sure</h3>
        <div className="modal-buttons">
          <button type="button" className="delete-button" onClick={()=> handleDelete (deletToDo)}>
            Delete
          </button>
          <button type="button" onClick={isClose} className="btn-secondary">
            Cancele
          </button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
