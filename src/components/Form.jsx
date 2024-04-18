import axios from "axios";
import { toast } from "react-toastify";
import { v4 } from "uuid";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;

    const newTodo = {
      id: v4(),
      title,
      status,
      date: new Date().toISOString(),
    };

    axios
      .post("http://localhost:3000/todos", newTodo)
      .then(() => {
        toast.success("Todo Eklendi");
        setTodos((prev) => [...prev, newTodo]);
      })
      .catch((err) => toast.error("Üzgünüz Sorun Oluştu"));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input type="text" className="form-control shadow" />
      <select className="form-select w-50 shadow">
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <button className="btn btn-sm btn-primary">Gönder</button>
    </form>
  );
};

export default Form;
