const { createServer } = require("node:http")
const stud = require("./3-read_file_async");

const port = 1245

const app = createServer((req, res) => {
    const {method, url} = req;

    res.setHeader("Content-type", "text-plain")

    if (url === "/") {
        res.end("Hello Alx!")
    }
    else if(url == "/students") {
        res.end("Hello Alx!")
        stud("database.csv")
    } 
});

app.listen(port, "localhost", () => {
    console.log("up and running")
})

module.exports = app
