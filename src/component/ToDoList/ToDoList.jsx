import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };
  
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    
  };
  
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  
  return (
    <>
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body bg-primary text-white">
              <h2 className="text-center mb-4">To-Do App!</h2>
              
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add New To-Do"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onClick={handleKeyPress}
                  required
                />
                <button 
                  className="btn btn-light" 
                  type="button" 
                  onClick={handleAddTask}
                >
                  Add
                </button>
              </div>
            </div>
            
            <div className="card-body">
              {tasks.length === 0 ? (
                <p className="text-center text-muted">Let's get some work done!</p>
              ) : (
                <ul className="list-group">
                  {tasks.map(task => (
                    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                      </span>
                      <div>
                        <button 
                          className="btn btn-outline-secondary btn-sm me-2" 
                          onClick={() => toggleComplete(task.id)}
                        >
                          Complete
                        </button>
                        <button 
                          className="btn btn-outline-danger btn-sm" 
                          onClick={() => deleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            

          </div>
        </div>
      </div>
    </div>
    </>
  
  );
};

export default TodoApp;