let router = require('express').router;

export default ( app ) => {

let date = new Date();
  // GET /
  // Default homepage route.
  //
  router.get('/', ( req, res ) => {
    console.log('/home');
    res.json(date);
  });
};
