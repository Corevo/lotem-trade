import models from '../datasource/models.js'

export function getAccounts({ userId }){
  return models.user.findById(userId).then(user => {
    console.log("user id is " + user.get().id);
    return user.getAccounts().then(arr => {
      return Promise.all(arr.map(acc => {
        return acc.get();
      }))
    }).then(arr => {
      console.log(arr);
    })
  })
}



// import models from '../datasource/models.js'

// export function getAccounts({ userId }){
//   return models.user.findById(userId).then(user => {
//     return user.getAccounts({
//       attributes: ['id'],
//     }).then(arr => {
//       return Promise.all(arr.map(acc => {
//         return acc.get();
//       }))
//     }).then(arr => {
//       console.log(arr);
//     })
//   })
// }
