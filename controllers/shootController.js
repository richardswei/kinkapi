var Shoot = require('../models/shoot');
var dataAccessService = require('../data/data_access_service')

// Display list of all Shoots.
exports.shoot_list = async function(req, res) {
    res.send(await dataAccessService.get_all_shoots());
};

// Display detail page for a specific Shoot.
exports.shoot_detail = async function(req, res) {
    res.send(await dataAccessService.get_shoot_by_shootId(req.params.shootId));
};

// Handle Shoot create on POST.
exports.shoot_create_post = async function(req, res) {
    res.send(await dataAccessService.post_shoot(req.body));
};
