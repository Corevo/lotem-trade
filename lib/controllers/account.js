import Account from '../datasources/models/account.js';

function getTransactions({ userId, accountId, }) {
  Account.findAll({
    where:{
      createdAt:{
        $gt: new Date(new Date() - 30 * 24 * 60 * 1000)
      }
    }
  })
}
