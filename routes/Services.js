const express = require("express");
const router = express.router();

router.get("/", (req, res) => {
    res.send({ data: "Here is the function for fetching all the services" });
});

router.post("/", (req, res) => {
    try {
        const serviceData = req.body; // get body of request as object
        res.send({ data: serviceData });
    } catch(err) {
        console.log(err.message);
    }
});

router.put("/", (req, res) => {
    res.send({ data: "Here is the modified service data" });
});

router.delete("/", (req, res) => {
    res.send({ data: "no data found" });
});

module.exports = router;