// @route method = GET api/profile /test
//@desc User profile: location, name, education...blogs w/comments.
// @access Public



const express = require('express');

const router = express.Router();

// res.json, similar to res.send, but it will output JSON per the API.
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

// have to export the router in order for server.js to recognize the file

module.exports = router;