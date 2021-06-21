var Shoot = require('../models/shoot');

// Display list of all Shoots.
exports.shoot_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoot list');
};

// Display detail page for a specific Shoot.
exports.shoot_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoot detail: ' + req.params.id);
};

// Handle Shoot create on POST.
exports.shoot_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Shoot create POST');
};
