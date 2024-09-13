import express from 'express';
import { addBook, deleteBook, getBooks, updateBook } from '../controllers/book.js';

const router = express.Router();

router.get("/", getBooks);

router.post("/", addBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;