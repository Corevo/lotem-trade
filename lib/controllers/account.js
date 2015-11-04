import { transaction } from '../datasource/models';
import { account } from '../datasource/models';

export function getLatestInTransactions({ accountId, days = 30 }){
  return account.findById(accountId).then(acc => {
    return acc.getIncoming();
  }).then(arr => {
    return arr.map(tran => {
      return {
        id: tran.get('id'),
        price: tran.get('price'),
        name: tran.get('name'),
        startDate: tran.get('startDate'),
        endDate: tran.get('endDate'),
      };
    });
  });
  // return transaction.findAll({
  //   attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
  //   where: {
  //     inAccount: accountId,
  //     startDate: {
  //       $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
  //     }
  //   },
  //   order: [
  //     ['startDate', 'DESC']
  //   ]
  // });
}

export function getLatestOutTransactions({ accountId, days = 30 }){
  return account.findById(accountId).then(acc => {
    return acc.getOutgoing();
  }).then(arr => {
    return arr.map(tran => {
      return {
        id: tran.get('id'),
        price: tran.get('price'),
        name: tran.get('name'),
        startDate: tran.get('startDate'),
        endDate: tran.get('endDate'),
      };
    });
  });
  // return transaction.findAll({
  //   attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
  //   where: {
  //     outAccount: accountId,
  //     startDate: {
  //       $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
  //     }
  //   },
  //   order: [
  //     ['startDate', 'DESC']
  //   ]
  // });
}

export function getLatestTransactions({ accountId, days = 30 }){
  return account.findById(accountId).then(acc => {
    return acc.getOutgoing();
  }).then(arr => {
    return acc.getIncomingTransactions().then(trans => {
      return arr.concat(trans);
    });
  }).then(arr => {
    return arr.map(tran => {
      return {
        id: tran.get('id'),
        price: tran.get('price'),
        name: tran.get('name'),
        startDate: tran.get('startDate'),
        endDate: tran.get('endDate'),
      };
    });
  });
}

export function getServicesOfAccount({ accountId })
{
    return account.findById(accountId).then(acc => {
        return acc.getServices();
    }).then(arr => {
      return arr.map(service => {
        return {
          id: service.get('id'),
          name: service.get('name'),
          price: service.get('price'),
        };
      });
    });
}

// export function getRawAccount({accountId}){
//   return account.findById(accountId).then(acc => {
//   })
// }
export function pay({ clientId, serviceProvierId, serviceId, startDate, endDate, description}) {
  return account.findById(clientId).then(client => {
    return account.findById(serviceProviderId).then(provider => {
      return servie.findById(serviceId).then(ser=> {
        return transaction.create({
          amount: ser.price,
          startDate,
          endDate,
          description,
        }).then(tran => {
          return tran.addService(ser).then(() => {
            return client.addOutgoingTransaction(tran).then(() => {
              return provider.addIncomingTransaction(tran);
            });
          });
        });
      });
    });
  });
}

