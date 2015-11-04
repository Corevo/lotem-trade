import models from '../datasource/models.js';

export function getAccounts({ userId }){
  return models.user.findById(userId).then(user => {
    return user.getAccounts({
    }).then(arr => {
      return arr.map(acc => {
        return {
          name: acc.get('name'),
          id: acc.get('id'),
          balance: acc.get('balance'),
        };
      });
    });
  });
}
