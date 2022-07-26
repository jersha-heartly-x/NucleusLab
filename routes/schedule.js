var db = require('../db');

exports.regularSchedule = function (req, res) {
    const day = new Date().toLocaleString('en-US', {weekday: "long"});
    
    const data = {
        day: day,
    }
    res.render("regular_schedule", data);
}