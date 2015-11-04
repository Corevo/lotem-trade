import models from '../datasource/models.js';
import log from '../log.js';

export function getAccounts({ userId }){
  return models.user.findById(userId).then(user => {
    return user.getAccounts({
    }).then(arr => {
      return arr.map(acc => {
        return {
          id: acc.get('id'),
          name: acc.get('name'),
          balance: acc.get('balance'),
        };
      });
    });
  });
}
