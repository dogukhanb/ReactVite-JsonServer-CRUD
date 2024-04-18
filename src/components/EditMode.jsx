import React from "react";

const EditMode = ({ todo, setIsEdit, handleUpdate }) => {
  return (
    <form
      onSubmit={handleUpdate}
      className="d-flex justify-content-between gap-3 align-items-center"
    >
      <select defaultValue={todo.type} className="form-select w-25 shadow">
        <option value="important">Önemli</option>
        <option value="dailt">Günlük</option>
        <option value="job">İş</option>
      </select>
      <input
        defaultValue={todo.title}
        className="form-control w-50 shadow"
        type="text"
      />
      <div className="btn-group">
        <button type="submit" className="btn btn-sm btn-success">
          Onayla
        </button>
        <button
          type="button"
          onClick={() => setIsEdit(false)}
          className="btn btn-sm btn-secondary"
        >
          İptal
        </button>
      </div>
    </form>
  );
};

export default EditMode;
