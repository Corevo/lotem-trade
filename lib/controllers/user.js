import models from '../datasource/models.js';

export function getAccounts({ userId }){
  return models.user.findById(userId).then(user => {
    return user.getAccounts({
      attributes: ['name', 'balance'],
    }).then(arr => {
      return Promise.all(arr.map(acc => {
        return acc.get();
      }));
    });
  });
}
