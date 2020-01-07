const { Router } = require('express')
const router = Router();

const BookController = require('../controllers/bookController.js')

router.get('/', BookController.index);
router.get('/new-entry', BookController.add);
router.post('/new-entry', BookController.save);
router.get('/delete/:id',BookController.delete )

module.exports = router