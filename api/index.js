import express from "express";
import cors from "cors";
import useRoutes from "./routers/books.js"

const app = express()
const PORT = 3333;

app.use(cors())
app.use(express.json())

app.use("/", useRoutes)

app.listen(PORT, () => {
    console.log(`Disponível em http://localhost:${PORT} ᓚᘏᗢ`);
})