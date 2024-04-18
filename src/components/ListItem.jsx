import axios from "axios";
import formatDate from "../utils/formatDate";
import ContentMode from "./ContentMode";
import { useState } from "react";
import EditMode from "./EditMode";
import { toast } from "react-toastify";

const ListItem = ({ todo, setTodos, allTodos }) => {
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        const filtredTodos = allTodos.filter((item) => item.id !== todo.id);
        setTodos(filtredTodos);
        toast.info("Todo Kaldırıldı");
      })
      .catch((err) => toast.error("Başarısız Oldu"));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const status = e.target[0].value;
    const title = e.target[1].value;

    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, { title, status })

      .then(() => {
        const updated = { ...todo, title, status };
        const newTodos = allTodos.map((item) =>
          item.id === updated.id ? updated : item
        );
        setTodos(newTodos);
        setIsEdit(false);
        toast.success("Güncelleme Başarılı");
      });
  };

  return (
    <li className="relative p-3 list-group-item d-flex justify-content-between align-items-center gap-3">
      {isEdit ? (
        <EditMode
          todo={todo}
          handleUpdate={handleUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <ContentMode
          todo={todo}
          handleDelete={handleDelete}
          setIsEdit={setIsEdit}
        />
      )}
      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
