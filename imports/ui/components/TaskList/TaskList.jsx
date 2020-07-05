import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Icon from '../Icon'

import s from './TaskList.scss'

const TaskList = ({ id, tasks, readonly, onChange, onAdd }) => {
  const getCheckboxId = (taskId) => {
    if (id) {
      return id + String(taskId)
    }

    return taskId
  }

  const handleChange = (task) => (event) => {
    onChange({ task, value: !event.target.checked })
  }

  const handleAddClick = () => {
    onAdd()
  }

  return (
    <div className={s.wrapper}>
      <ul id={id} className={s.list}>
        {tasks.map(task => (
          <li className={s.item}>
            <div className={classnames(s.task, { [s.isCompleted]: task.done })}>
              <input
                type="checkbox"
                id={getCheckboxId(task._id)}
                className={s.checkboxInput}
                onChange={handleChange(task)}
                disabled={readonly}
                checked={task.done}
              />
              <label
                htmlFor={getCheckboxId(task._id)}
                className={s.checkboxLabel}
              >
                <Icon className={s.checkboxBox}>check</Icon>
                {task.name}
              </label>
              <div className={s.private}>
                {task.private}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.addWrapper}>
        <button type="button" className={s.addButton} onClick={handleAddClick}>
          <Icon>add</Icon>
        </button>
      </div>
    </div>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  readonly: PropTypes.bool,
  onChange: PropTypes.func,
  onAdd: PropTypes.func
}

TaskList.defaultProps = {
  tasks: [],
  readonly: false,
  onChange: () => {},
  onAdd: () => {}
}

export default TaskList
