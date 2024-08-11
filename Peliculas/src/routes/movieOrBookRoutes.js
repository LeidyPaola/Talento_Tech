const express = require('express');
const router = express.Router();
const { 
    getAll, 
    createOne, 
    getOneById, 
    updateOneById, 
    deleteOneById 
} = require('../controllers/movieOrBookController');

router.get('/', getAll);
router.post('/', createOne);
router.get('/:id', getOneById);
router.put('/:id', updateOneById);
router.delete('/:id', deleteOneById);

module.exports = router;
