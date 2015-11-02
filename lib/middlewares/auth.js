import Account from '../datasources/models/account.js';

let userId;

(res, req, next)  => {
  accountId = req.params.id;
  Account.findById(account.id).then( acc  => {
    acc.getUsers().then( users  => {
      users.map( user  => {
        if()
      } )
    } )
  });
}
