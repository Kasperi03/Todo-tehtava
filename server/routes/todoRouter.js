import { Router } from 'express'
import { getTasks, postTask, removeTask } from '../controllers/TaskController.js'

const router = Router()

router.get('/', getTasks)
router.post('/create', postTask)
router.delete('/delete/:id', removeTask)

export default router