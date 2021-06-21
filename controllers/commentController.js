var Comment = require('../models/comment');

// Display list of all Comments.
exports.comment_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Comment list');
};

// Display detail page for a specific Comment.
exports.comment_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Comment detail: ' + req.params.id);
};

// Handle Comment create on POST.
exports.comment_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Comment create POST');
};
