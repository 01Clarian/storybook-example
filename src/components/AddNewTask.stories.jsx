import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { AddNewTask } from './AddNewTask';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import * as TaskStories from './Task.stories';
import { MockedState } from './TaskList.stories';

// A super-simple mock of a redux store
const Mockstore = ({ taskboxState, children }) => (
    <Provider
        store={configureStore({
            reducer: {
                taskbox: createSlice({
                    name: 'taskbox',
                    initialState: taskboxState,
                    reducers: {
                        updateTaskState: (state, action) => {
                            const { id, newTaskState } = action.payload;
                            const task = state.tasks.findIndex((task) => task.id === id);
                            if (task >= 0) {
                                state.tasks[task].state = newTaskState;
                            }
                        },
                    },
                }).reducer,
            },
        })}
    >
        {children}
    </Provider>
);

export default {
  title: 'AddNewTask',
  component: AddNewTask,
  decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  excludeStories: /.*MockedState$/,
};

export const Default = () => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
  };

  const handleAddNewTask = () => {
    const taskId = MockedState.tasks.length + 1
    const newTaskData = { ...TaskStories.Default.args.task, id: taskId, title: newTask };
    action('addNewTask')(newTaskData);
    setNewTask('');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={handleChange}
        className='text_input'
      />
      <button
        className='new-task-button'
        onClick={() => {
          if (newTask === '') {
            alert("please enter a title...");
          } else {
            handleAddNewTask();
          }
        }}
      >
        Add Task
      </button>

      <div style={{color:'white', margin:'2px', padding:'2px'}}>
        {MockedState.tasks.map(t=>t.title)}
        </div>
    </div>
  );
};