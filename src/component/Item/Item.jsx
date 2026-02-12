import moment from "moment";
import "../../index.css";
import { getDuDateClass, getDueDateStatus } from "../../utils/dueDateUtils";
const Item = ({
  dueDate,
  title,
  description,
  handleModalwithItem,
  id,
  completed,
  handleEdit,
  handleToggleComplete,
}) => {
  const status=getDueDateStatus(dueDate)
  const dueDateClass=getDuDateClass(status)
  console.log({status,dueDateClass});
  
  const formattedDueDate = dueDate
    // ? new Date(dueDate).toLocaleDateString("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //   })
    ?moment(dueDate).format("YYYY/MM/DD")
    : "No Date";
  console.log({ formattedDueDate });

  return (
    <li className="todo_item">
      <div className="todo_items_left">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="todo_items_right">
        <div className="todo_items_left">
          <span className="due_date_label">Due Date:</span>
          <h3 className={dueDateClass}>{formattedDueDate}</h3>
        </div>
        <button
          className="todos_buttons"
          onClick={() => handleModalwithItem({ id })}
        >
          <div className="delete">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:cc="http://creativecommons.org/ns#"
              xmlns:dc="http://purl.org/dc/elements/1.1/"
            >
              <g transform="translate(0 -1028.4)">
                <path
                  d="m3 1032.4v4 2 3 1 1 1 5c0 1.1 0.8954 2 2 2h7 7c1.105 0 2-0.9 2-2v-5-1-1-1-3-2-4c0 1.1-0.895 2-2 2h-7-7c-1.1046 0-2-0.9-2-2z"
                  fill="#bdc3c7"
                />
                <path
                  d="m3 1033.4v4 0.7c0.2945 0.2 0.635 0.3 1 0.3h2 5 2 5 2c0.365 0 0.705-0.1 1-0.3v-0.7-4c0 1.1-0.895 2-2 2h-7-7c-1.1046 0-2-0.9-2-2z"
                  fill="#95a5a6"
                />
                <path
                  d="m12 1037.4h-1.156l-1.9378 3.3 1.7498 1 1.344-2.3 1 1.7-0.875 0.5 2.75 0.8 0.719-2.8-0.875 0.5-1.563-2.7h-0.031-1.125zm-2.5625 5-2.75 0.8 0.875 0.5-1.5937 2.7 1.1562 2h3.875v-2h-2.7188l1-1.7 0.8748 0.5-0.7185-2.8zm6.9375 0.6-1.719 1 1.344 2.4h-2v-1l-2 2 2 2v-1h3.156 0.032l1.124-2-1.937-3.4z"
                  fill="#27ae60"
                />
                <path
                  d="m3 1049.4v1c0 1.1 0.8954 2 2 2h7 7c1.105 0 2-0.9 2-2v-1c0 1.1-0.895 2-2 2h-7-7c-1.1046 0-2-0.9-2-2z"
                  fill="#95a5a6"
                />
                <path
                  d="m4 1029.4c-1.1046 0-2 0.9-2 2v1 1 1 1c0 1.1 0.8954 2 2 2h2 5 2 5 2c1.105 0 2-0.9 2-2v-1-1-1-1c0-1.1-0.895-2-2-2h-2-5-2-5-2z"
                  fill="#bdc3c7"
                />
                <path
                  d="m5 1030.4c-0.5523 0-1 0.4-1 1v1 1 1c0 0.5 0.4477 1 1 1h14c0.552 0 1-0.5 1-1v-1-1-1c0-0.6-0.448-1-1-1h-14z"
                  fill="#7f8c8d"
                />
                <path
                  d="m12 1037.4h-1.156l-0.563 1h3.438l-0.563-1h-0.031-1.125z"
                  fill="#7f8c8d"
                />
                <path
                  d="m10.438 1.4375l-0.7818 0.5625-0.375 0.2812-0.2812-0.2812-1 1h-1l-1-1-2 2v1 1c0 0.5523 0.4477 1 1 1h3 11c0.552 0 1-0.4477 1-1l-1-1v-1h-1l-1-1h-2v-0.5h-1l-0.312-0.5-0.282-0.4062-0.406 0.4062-1 1-1-1-0.562-0.5625z"
                  transform="translate(0 1028.4)"
                  fill="#ecf0f1"
                />
              </g>
            </svg>
          </div>
        </button>
        <button
          className="todos_buttons"
          onClick={() =>
            handleEdit({ id, title, description, dueDate: dueDate })
          }
        >
          <div className="edit">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50px"
              height="50px"
              viewBox="0 0 32 32"
              enable-background="new 0 0 32 32"
              xml:space="preserve"
            >
              <g>
                <path
                  fill="#828282"
                  d="M1.5,32h29c0.827,0,1.5-0.673,1.5-1.5v-29C32,0.673,31.327,0,30.5,0h-29C0.673,0,0,0.673,0,1.5v29
		C0,31.327,0.673,32,1.5,32z M1,1.5C1,1.224,1.225,1,1.5,1h29C30.775,1,31,1.224,31,1.5v29c0,0.276-0.225,0.5-0.5,0.5h-29
		C1.225,31,1,30.776,1,30.5V1.5z"
                />
                <path
                  fill="#828282"
                  d="M4,28.479c0.048,0,0.096-0.007,0.143-0.021l10-2.979c0.081-0.024,0.154-0.068,0.213-0.127l10.09-10.205
		c0.023-0.024,0.035-0.053,0.052-0.08l3.658-3.658c0.607-0.607,0.607-1.595,0-2.203L22.92,3.972c-0.607-0.607-1.595-0.608-2.202,0
		l-3.739,3.739c-0.024,0.024-0.036,0.054-0.054,0.081L6.807,17.911c-0.056,0.056-0.098,0.124-0.122,0.199l-3.16,9.715
		c-0.058,0.177-0.012,0.371,0.117,0.504C3.737,28.426,3.867,28.479,4,28.479z M17.359,8.771l1.04,1.04l-8.523,8.563l-1.727-0.392
		L17.359,8.771z M10.5,19.165l8.607-8.646l2.434,2.434L12.796,21.5H10.5V19.165z M23.385,14.797l-9.246,9.352l-0.576-1.999
		l8.684-8.489L23.385,14.797z M7.493,18.859L9.5,19.315V22c0,0.276,0.224,0.5,0.5,0.5h2.624l0.633,2.2l-8.487,2.528L7.493,18.859z
		 M21.425,4.679c0.218-0.217,0.572-0.216,0.788,0l5.235,5.235c0.218,0.217,0.218,0.571,0,0.789l-3.372,3.372l-6.023-6.023
		L21.425,4.679z"
                />
              </g>
            </svg>
          </div>
        </button>

        <div className="toggle-checkbox">
          <input
            type="checkbox"
            id={`todo-${id}`}
            checked={completed}
            onChange={() => handleToggleComplete(id)}
          />
          <label htmlFor={`todo-${id}`} className="custom-checkbox">
            {completed ? "✓" : ""}
          </label>
        </div>
      </div>
    </li>
  );
};
export default Item;
