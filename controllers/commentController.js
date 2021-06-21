var Comment = require('../models/comment');
var dataAccessService = require('../data/data_access_service')


// Display list of all Comments.
exports.comment_list = async function(req, res) {
    res.send(await dataAccessService.get_all_comments_by_shootId(req.params.shootId));
};

// Handle Comment create on POST.
exports.comment_create_post = async function(req, res) {
    res.send(await dataAccessService.post_comment(req.body));
};
