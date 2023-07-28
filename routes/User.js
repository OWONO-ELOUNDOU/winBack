const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ data: "Here is your data" });
});

router.post("/", (req, res) => {
    try {
        let user = {
            name: req.body.fname,
            surname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            twon: req.body.twon,
            country: req.body.country,
        };
        res.send({ data: user });
    } catch (err) {
        console.log(err.message);
    }
});

router.put("/", (req, res) => {
    res.send({ data: "Here is your modified posted data" });
});

router.delete("/", (req, res) => {
    res.send({ data: "no data because they have all been deleted" });
});

module.exports = router;