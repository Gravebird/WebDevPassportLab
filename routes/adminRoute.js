const express = require("express");
const passport = require("../middleware/passport");

const router = express.Router();

router.get("/", (req, res) => {
    if (req.user.role == "admin") {
        const aggregateSessions = req.sessionStore.sessions
        res.render("admin", {
            sessions: aggregateSessions,
            user: req.user,
        });
    } else {
        res.redirect("/dashboard");
    }
});

router.post("/", (req, res) => {
    const aggregateSessions = req.sessionStore.sessions
    Object.keys(aggregateSessions).forEach(key => {
        if (key === (req.body.theSession)){
            delete aggregateSessions[key]
        }
    });
    res.redirect("/admin")
});



module.exports = router;
