import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');       // ADDED BACK
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');     // ADDED BACK

  const submitHandler = (e) => {
    e.preventDefault();
    const newTaskObject = { 
      id: Date.now(),
      taskTitle, 
      taskDescription, 
      taskDate, 
      category, 
      active: false, newTask: true, failed: false, completed: false 
    };
    const updatedUserData = userData.map(employee => {
      if (asignTo === employee.firstName) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTaskObject],
          taskCounts: { ...employee.taskCounts, newTask: employee.taskCounts.newTask + 1 }
        };
      }
      return employee;
    });
    setUserData(updatedUserData);
    setTaskTitle('');
    setCategory('');       // ADDED BACK
    setAsignTo('');
    setTaskDate('');       // ADDED BACK
    setTaskDescription('');
  };

  if (!userData) {
    return (
      <div className="rounded-xl border border-neutral-300 bg-white p-6 text-center text-neutral-400 shadow-sm">
        Loading...
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-300 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-neutral-500">Create a New Task</h2>
      <form onSubmit={submitHandler} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-500">Task Title</label>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-neutral-500 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            type="text" placeholder="Make a UI design" required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-500">Assign To</label>
          <select
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className="mt-1 block w-full rounded-md border-neutral-500 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
            required
          >
            <option value="" disabled>Select an employee</option>
            {userData.map(employee => (
              <option key={employee.id} value={employee.firstName}>
                {employee.firstName}
              </option>
            ))}
          </select>
        </div>
        
        {/* ADDED BACK: Date and Category Inputs */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-neutral-500">Date</label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-neutral-500 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              type="date" required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-500">Category</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 block w-full rounded-md border-neutral-500 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
              type="text" placeholder="design, dev, etc" required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-500">Description</label>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="mt-1 block h-28 w-full rounded-md border-neutral-500 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button
            type="submit"
            className="w-full rounded-md bg-neutral-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;