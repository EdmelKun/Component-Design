MIDTERM EXAM INSTRUCTIONS

✅ To-Do List Application with Design Patterns
Problem Statement:
Design a modular To-Do List Application that supports different types of tasks, 
multiple rendering mechanisms, notifications for task changes, dynamic task behaviors (like alerts), 
and customizable UI renderings.

✅ Design Patterns:
1. Factory Pattern
2. Singleton Pattern
3. Adapter Pattern
4. Decorator Pattern
5. Strategy Pattern
6. Observer Pattern

✅ What you need to do:

================================================================================================
🏭 1. Factory Method — Task Creation
Goal: Allow creation of different types of tasks (e.g., Basic Task, Timed Task, Checklist Task) 
without tightly coupling code to their concrete classes/functions. 

Requirement:
Implement a TaskFactory that creates UI components based on a type string (e.g., "basic", "timed", "checklist").
For example: create a file named TaskFactory.tsx and inside it are conditionally rendered UI task components 
that accepts only parameters (type of task) and renders only that type of task.

Sample implementation: 
    import { TaskFactory } from "./TaskFactory";

    //some of the code here

    <div>
        <TaskFactory type="basic" />
        <TaskFactory type="timed" />
        <TaskFactory type="checklist" />
    </div>

================================================================================================
🔁 2. Singleton — To-Do App Operations Manager
Goal: Ensure there's only one centralized TaskManager that handles global operations (add, remove, search, etc.).

Requirement:
Create a TaskManager singleton file to manage all task operations.
For example: create a file named TaskManager.ts and inside it are the methods: addTask, removeTask, searchTask, etc. 
that accepts only parameters.

Sample implementation:
    import { TaskManager } from "./TaskManager";
    const removeTask = TaskManager.removeTask(taskId);

    //some of the code here

    <button onClick={removeTask}>Remove Task</button>

================================================================================================
🔌 3. Adapter — Integrate and Format Task Data
Goal: Fetch data from an external API or your backend and format it into the app's internal Task interface.

Requirement:
Convert data to match your Task interface.

Sample implementation:
    interface Task {
        id: string;
        title: string;
        description?: string;
        dueDate?: string;
    }

    import {useState, useEffect} from "react";
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const response = await fetch("https://api.example.com/tasks");
            const data = await response.json();
            setTasks(data);
        };
        fetchTasks();
    }, []);

================================================================================================
🎀 4. Decorator — Extend Tasks with Reminders
Goal: Show a reminder icon for tasks that have a due date.

Requirement:
A reminder icon should be visible on the upper right corner of the task card if the task has a due date.

Sample implementation:

    //some of the code here

    <div>
        {data.map((task) => (
            <div key={task.id}>
                {task.title}
                {task.dueDate ? <span>Reminder</span> : null}
            </div>
        ))}
    </div>

================================================================================================
🧠 5. Strategy — Customizable Task Sorting
Goal: Let users choose how tasks are sorted — by due date, name, or id.

Requirement:
Create a TaskSortingStrategy file with functions that accepts only parameters and returns the sorted tasks.

Sample implementation:
    import { TaskSortingStrategy } from "./TaskSortingStrategy";

    //some of the code here

    const [data, setData] = useState<Task[]>([]);

    //fetching logic

    const sortedTasksByDate = TaskSortingStrategy.sortByDate(data); //this data is sorted by due date
    const sortedTasksByName = TaskSortingStrategy.sortByName(data); //this data is sorted by name
    const sortedTasksById = TaskSortingStrategy.sortById(data); //this data is sorted by id

    //up to you how you want to display the sorted tasks

================================================================================================
🔔 6. Observer — Task Change Notifications
Goal: Show a notification or alert when a task is overdue.

Requirement:
A notification or alert should be visible on the screen if a task is overdue.

Sample implementation:
    import {Notification} from "./Notification";

    //some of the code here

    <div>
        {data.map((task) => (
            <div key={task.id}>
                {task.title}
                {task.dueDate && task.dueDate < new Date() ? <Notification>Your task is overdue</Notification> : null}
            </div>
        ))}
    </div>

================================================================================================
