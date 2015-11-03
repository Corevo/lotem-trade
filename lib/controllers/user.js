import models from '../datasource/models.js'

function getAccounts({ userId }){
  return models.user.findById(userId).then(user => {
    return user.getAccounts({
      attributes: ['id'],
    }).then(arr => {
      return Promise.all(arr.map(acc => {
        return acc.get();
      }))
    }).then(arr => {
      console.log(arr);
    })
  })
}
