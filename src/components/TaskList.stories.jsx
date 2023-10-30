import TaskList from './TaskList';
import * as TaskStories from './Task.stories';
import { useDispatch, useSelector } from 'react-redux';

import { Provider } from 'react-redux';

import { configureStore, createSlice } from '@reduxjs/toolkit';

// A super-simple mock of the state of the store
export const MockedState = {
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2', state: 'TASK_PINNED' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4', state: 'TASK_ARCHIVED' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
        { ...TaskStories.Default.args.task, id: '7', title: 'Task 7' },

    ],
    status: 'idle',
    error: null,
};

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
    component: TaskList,
    title: 'TaskList',
    decorators: [(story) => <div style={{ padding: '3rem' }}>{story()}</div>],
    tags: ['autodocs'],
    excludeStories: /.*MockedState$/,
};

export const Default = {
    decorators: [
        (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
    ],
};

export const filteredDefault = {
    decorators: [
        (story) => {
                const tasksInOrder = [
                    ...MockedState.tasks.filter((t) => t.state === 'TASK_PINNED'),
                    ...MockedState.tasks.filter((t) => t.state !== 'TASK_PINNED'),
                ];
                const filteredTasks = [
                    ...tasksInOrder.filter(
                        (t) => t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED'),
                    ...tasksInOrder.filter(
                        (t) => t.state === 'TASK_ARCHIVED'),
                ]
            return (
                <Mockstore
                    taskboxState={{
                        ...MockedState,
                        tasks: filteredTasks
                    }}
                >
                    {story()}
                </ Mockstore>
            )
        }
    ]
}

export const WithPinnedTasks = {
    decorators: [
        (story) => {
            const pinnedtasks = [
                ...MockedState.tasks.slice(0, 5),
                { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
            ];

            return (
                <Mockstore
                    taskboxState={{
                        ...MockedState,
                        tasks: pinnedtasks,
                    }}
                >
                    {story()}
                </Mockstore>
            );
        },
    ],
};

export const Loading = {
    decorators: [
        (story) => (
            <Mockstore
                taskboxState={{
                    ...MockedState,
                    status: 'loading',
                }}
            >
                {story()}
            </Mockstore>
        ),
    ],
};

export const Empty = {
    decorators: [
        (story) => (
            <Mockstore
                taskboxState={{
                    ...MockedState,
                    tasks: [],
                }}
            >
                {story()}
            </Mockstore>
        ),
    ],
};