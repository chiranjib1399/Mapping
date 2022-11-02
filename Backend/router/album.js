const express = require('express');
const router = express.Router();


const AlbumControl = require('../controller/album')

router.get('/', AlbumControl.getAlldata)
router.get('/:id',AlbumControl.getOneBook)
// router.post('/' ,bookControl.addBook)

// router.patch('/:id', bookControl.updateBook)

// router.delete('/:id', bookControl.deleteBook)
module.exports =router;