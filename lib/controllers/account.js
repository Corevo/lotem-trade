import Transaction from '../datasource/models/transaction.js';

export function getTransactions(accountId) {
  return Transaction.findAll({
    // where: {
    //   $or: [
    //     { outAccount: accountId },
    //     { inAccount: accountId },
    //   ],
    //   createdAt: {
    //     $gt: new Date(new Date() - 24 * 30 * 60 * 1000)
    //   }
    // }
  });
}
