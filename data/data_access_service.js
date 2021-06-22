const storage = require('node-persist');
var Shoot = require('../models/shoot');
var Comment = require('../models/comment');

/*SHOOTS*/
async function get_all_shoots() {
  await storage.init();
  const data = await storage.getItem('shoots');
  return data;
}

async function post_shoot(payload) {
  const title = payload["shoot_title"];
  await storage.init();
  let shootData = await storage.getItem('shoots');
  let shoot = new Shoot({
    id: Object.keys(shootData).length,
    shoot_title: title,
    date_last_updated: Date.now()
  });
  let id = shoot.id;
  add_shoot_key_to_comments(id);
  shootData[id]=shoot;
  await storage.setItem('shoots', shootData);
  return shoot;
}

async function get_shoot_by_shootId(shot_id) {
  await storage.init();
  let data = await storage.getItem('shoots');
  return data[shot_id]
}

/*COMMENTS*/
async function add_shoot_key_to_comments(id) {
  await storage.init();
  let commentData = await storage.getItem('comments');
  commentData[id] = []
  await storage.setItem('comments', commentData);
}

async function get_all_comments_by_shootId(shoot_id) {
  await storage.init();
  const data = await storage.getItem('comments');
  let comments = data[shoot_id]
  return comments;
}

async function post_comment(payload) {
  await storage.init();
  const data = await storage.getItem('comments');
  let comments = data[payload['shootId']];
  if (comments == null) {
    throw 'noShootError';
  }
  let comment = new Comment({
    shoot_id_reference: payload['shootId'],
    comment_body: payload['comment']
  })
  validateComment(comment.comment_body)
  comments.push(comment)
  await storage.setItem('comments', data);
  return comment;
}


function validateComment(comment) {
  if (comment.length > 99 || comment.length<10) {
    throw "invalidCommentLengthError"
  } else if (comment.match('/[^a-zA-Z0-9\s!.,]/g;') !== null ) { // allowing only latin characters and some punctuation
    throw "invalidCommentTextError"
  }
}


/*GENERAL*/
async function initializeStorage() {
  await storage.init();
  await storage.setItem('shoots', new Map());
  await storage.setItem('comments', new Map());
}

module.exports.initializeStorage = initializeStorage;
module.exports.get_all_shoots = get_all_shoots;
module.exports.post_shoot = post_shoot;
module.exports.get_shoot_by_shootId = get_shoot_by_shootId;
module.exports.post_comment = post_comment;
module.exports.get_all_comments_by_shootId = get_all_comments_by_shootId;