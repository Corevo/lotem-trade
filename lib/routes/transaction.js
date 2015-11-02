let router = require('express').router;

export default ( req, res ) => {

  router.get('/', ( req, res ) => {
    console.log('/transactions!');
      res.send('/transactions/')
  });
};
