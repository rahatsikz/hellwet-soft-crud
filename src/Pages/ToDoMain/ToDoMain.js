import React from "react";

const ToDoMain = () => {
  return (
    <div className="container mx-auto mt-12">
      <form>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input focus:border-0 input-bordered w-full"
          />
          <input
            type="calendar"
            name="photo"
            placeholder="Service Photo URL"
            className="input focus:border-0 input-bordered w-full"
          />
        </div>
        <textarea
          name="description"
          className="textarea textarea-bordered focus:border-0 w-full my-4"
          placeholder="Description"
        ></textarea>
        <button
          type="submit"
          className="btn btn-block bg-[#2879E1] border-0 text-white"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default ToDoMain;
