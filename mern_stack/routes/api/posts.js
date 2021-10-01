// @route method = GET api/posts/test
//@desc User will create posts/blogs w/comments.
// @access Public

const express = require('express');

const router = express.Router();

// res.json, similar to res.send, but it will output JSON per the API.
router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

// have to export the router in order for server.js to recognize the file

module.exports = router;