import Transaction from '../datasource/models/transaction';

export function getLatestInTransactions({ accountId, days = 30 }){
  return Transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
    where: {
      inAccount: accountId,
      startDate: {
        $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
      }
    }
  }).then(arr => {
    return Promise.all(arr.map(tran=>{
      return tran.get();
    }));
  });
}

export function getLatestOutTransactions({ accountId, days = 30 }){
  return Transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
    where: {
      outAccount: accountId,
      startDate: {
        $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
      }
    }
  }).then( arr => {
    return Promise.all(arr.map(tran=>{
      return tran.get();
    }));
  });
}
/*
export function getLatestTransactions({ accountId, days = 30 }){
  return Transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount','startDate','endDate'],
    where: {
      $or:[outAccount: accountId,
           inAccount: accountId],
      startDate: {
         $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
      }
    },
  }).then(arr => {
    return Promise.all(arr.map(tran=>{
      return tran.get();
    }));
  });
}*/
