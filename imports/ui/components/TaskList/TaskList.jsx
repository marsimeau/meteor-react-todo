import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import s from './TaskList.scss'

const TaskList = ({ id, tasks, readonly, onTaskChange }) => {
  const getCheckboxId = (taskId) => {
    if (id) {
      return id + String(taskId)
    }

    return taskId
  }

  return (
    <ul id={id} className={s.list}>
      {tasks.map(task => (
        <li className={s.item}>
          <div className={classnames(s.task, { [s.isCompleted]: task.done })}>
            <input
              type="checkbox"
              id={getCheckboxId(task._id)}
              className={s.checkbox}
              onChange={onTaskChange}
              disabled={readonly}
              checked={task.done}
            />
            <label
              htmlFor={getCheckboxId(task._id)}
              className={s.checkboxLabel}
            >
              {task.name}
            </label>
            <div className={s.private}>
              {task.private}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  readonly: PropTypes.bool,
  onTaskChange: PropTypes.func
}

TaskList.defaultProps = {
  tasks: [],
  readonly: false,
  onTaskChange: () => {}
}

export default TaskList
