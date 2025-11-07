import { selectAllTasks, insertTask, deleteTask } from "../models/Task.js"
import { ApiError } from "../helper/ApiError.js"

export const getTasks = async (req, res, next) => {
  try {
    const result = await selectAllTasks()
    res.status(200).json(result.rows)
  } catch (error) {
    next(error)
  }
}

export const postTask = async (req, res, next) => {
  const { task } = req.body

  try {
    if (!task || !task.description || task.description.trim() === "") {
      return next(new ApiError("Task description is required", 400))
    }

    const result = await insertTask(task.description)
    res.status(201).json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

export const removeTask = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await deleteTask(id)

    if (result.rowCount === 0) {
      return next(new ApiError("Task not found", 404))
    }

    res.status(200).json({ id })
  } catch (error) {
    next(error)
  }
}