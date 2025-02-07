const { createServer } = require("node:http")
const port = 1245

const app = createServer((req, res) => {
    res.setHeader("Content-type", "text-plain")
    res.end("Hello Alx!")
});

app.listen(port, "localhost", () => {
    console.log("up and running")
})

module.exports = app
