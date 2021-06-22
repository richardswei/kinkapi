var Comment = require('../models/comment');
var dataAccessService = require('../data/data_access_service')


// Display list of all Comments.
exports.comment_list = async function(req, res) {
    res.send(await dataAccessService.get_all_comments_by_shootId(req.params.shootId));
};

// Handle Comment create on POST.
exports.comment_create_post = async function(req, res) {
    try {
        res.send(await dataAccessService.post_comment(req.body));
    } catch (error) {
        if (error == 'noShootError') {
            res.status(404).send('Shoot does not exist!')
        } else if (error == 'invalidCommentLengthErrorComments'){
            res.status(400).send('Comments should be at least 10 characters and less than 100 characters.')
        } else if (error == 'invalidCommentCharactersError') {
            res.status(400).send('Comments can only contain latin characters and the following punctuation: ! , .')
        } else {
            res.status(500).send('Unknown error')
        }
    }
};
