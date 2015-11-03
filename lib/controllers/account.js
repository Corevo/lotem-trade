import Transaction from '../datasource/models/transaction'

exoport function getLatestInTransactions({ accountId, days = 30 }){
  return Transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount','startDate','endDate'],
    where: {
      inAccount: accountId
    },
  }).then(arr => {
    return Promise.all(arr.map(tran=>{
      return tran.get();
    }))
  })
}

exoport function getLatestOutTransactions({ accountId, days = 30 }){
  return Transaction.findAll({where: {outAccount: accountId}}).then(() => {
    return []
  }).then(() => {
  });
}

exoport function getLatestTransactions({ accountId, days = 30 }){
  return Transaction.findAll({
    where: {
      $or:[outAccount: accountId,
           inAccount: accountId]
      }}).then(() => {
    return []
  }).then(() => {
  });
}

funciton (){
  let accountId=2,days=2;
  getLatesttransactions({ accountId: 2, days }).then(arr  => {
  })
}
