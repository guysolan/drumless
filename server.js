import handler from "./handler.js";
import express from "express";
import Datastore from "nedb";

const app = express();
const port = 8080;

app.use("/", express.static("drumless"));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore("beat.db");
database.loadDatabase();
app.get("/beat", function (request, response) {
    database.find({}, function (err, allBeats) {
        if (err) {
            response.end();
            return;
        }
        response.json(allBeats);
    });
});

app.use("/", express.json());
app.post("/beat", function (request, response) {
    const timeStamp = Date.now();
    const beat = request.body;
    beat.timeStamp = timeStamp;
    database.insert(beat);
    response.json({
        status: "success",
        timeStamp: timeStamp,
        inst: "beat",
    });
});

app.listen(port, function () {
    console.log("listening at " + port);
});
