import React from 'react';
import { ITask } from '../Interface';

interface Props {
    task: ITask;
}

const TodoWork = ({task} : Props) => {
    return (
        <div>
            {task.taskName}
        </div>
    )
}

export default TodoWork;
