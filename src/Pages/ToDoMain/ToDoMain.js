import React, { useState } from "react";
// import Calendar from "react-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ToDoMain.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useEffect } from "react";
import ToDoCard from "./ToDoCard";
// import "react-calendar/dist/Calendar.css";

const ToDoMain = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  // const [value, onChange] = useState(new Date());
  const handleAddTodo = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    // console.log(title, startDate, description);
    axios
      .post("http://localhost:5000/addtodo", {
        title,
        description,
        dueDate: startDate,
        email: user?.email,
      })
      .then(
        (response) => {
          console.log(response);
          toast.success("Task has been added successfully");
          form.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    fetch(`http://localhost:5000/todo?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, [user?.email, todos]);
  return (
    <div className="container mx-auto my-12">
      <div>
        <h3 className="text-center font-medium text-xl my-8">
          Welcome {user?.displayName}
        </h3>
        {todos.length > 0 ? (
          <h4 className="text-center text-lg">Here is your Todo List</h4>
        ) : (
          <h4 className="text-center text-lg">
            No Todo's Found. Please Add some
          </h4>
        )}
      </div>
      <div>
        {todos.map((todo) => (
          <ToDoCard key={todo._id} todo={todo}></ToDoCard>
        ))}
      </div>
      <div>
        <h4 className="text-center text-lg mt-8">Add New Task</h4>
      </div>
      <form
        onSubmit={handleAddTodo}
        className="bg-gray-100 mt-8 p-8 rounded-lg"
      >
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="input focus:border-0 input-bordered w-full"
          />

          <div className="input focus:border-0 input-bordered w-full pt-2">
            <DatePicker
              selected={startDate}
              showTimeSelect
              dateFormat="Pp"
              onChange={(date) => setStartDate(date)}
            />
          </div>
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
