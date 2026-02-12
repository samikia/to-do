import Item from "../Item/Item";
import "../../index.css";
const ToDoList = ({ todos, handleModalwithItem, handleEdit,handleToggleComplete }) => {
  return (
    <ol className="todo_list">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          title={todo.title}
          description={todo.description}
          handleModalwithItem={handleModalwithItem}
          completed={todo.completed}
          id={todo.id}
          handleEdit={handleEdit}
          handleToggleComplete={handleToggleComplete}
          dueDate={todo.dueDate}
        />
      ))}
    </ol>
  );
};
export default ToDoList;
