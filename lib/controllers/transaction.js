import Transaction from '../datasource/models/transaction'

exoport function getLatesttransactions({ accountId, days = 30 }){
  return Transaction.findAll({}).then(() => {
    return []
  }).then(() => {

  });
}

funciton (){
  let accountId=2,days=2;
  getLatesttransactions({ accountId: 2, days }).then(arr  => {
  })
}
