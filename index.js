import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

let dailyList = [];
let workList = [];

app.post("/daily", (req, res) => {

    var newTask = req.body.taskInput;
    if (newTask) {
        dailyList.push(newTask);
    }

    res.render("daily.ejs", { tasks: dailyList });
});

app.post("/work", (req, res) => {
    
    const newTask = req.body.taskInput;
    if (newTask) {
        workList.push(newTask);
    }

    res.render("work.ejs", { tasks: workList });
});

app.listen(port, () => {
    console.log('Listening on port ' + port);    
});