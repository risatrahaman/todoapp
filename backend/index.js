const express = require("express");
const app = express();
const pool = require("./db");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => {
    pool.query("select * from todo", (err, result) => {
        if (err){
            throw err;
        }
        res.json(result);
    }); 
});

app.post("/", async(req, res) => {
    const {task} = req.body;

    pool.query('insert into todo (task) values(?)', [task], (err, result) => {
        if (err){
            throw err;
        }
        res.json(result);
    });

});

app.delete("/:id", async(req, res) => {
    const {id} = req.params;
    pool.query("delete from todo where id = ?", [id], (err, result) => {
        if (err){
            throw err;
        }
        res.json(result);
    });
})

app.listen(3000, () => {
    console.log("server has started");
});