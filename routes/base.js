var express = require('express');
var router = express.Router();

var shoot_controller = require('../controllers/shootController');
var comment_controller = require('../controllers/commentController');

/*SHOOTS*/
/* GET all shoots. */
router.get('/shoots', shoot_controller.shoot_list)

/* GET a specific shoot. */
router.get('/shoots/:shootId', shoot_controller.shoot_detail) 

/* POST a shoot. */
router.post('/shoots', shoot_controller.shoot_create_post)


/*COMMENTS*/
/* GET a specific shoot's comments. */
router.get('/shoots/:shootId/comments',  comment_controller.comment_list)

/* POST a specific shoot's comments. */
router.post('/comments',  comment_controller.comment_create_post)



module.exports = router;
