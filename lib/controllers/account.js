import { transaction } from '../datasource/models';
import { account } from '../datasource/models';

export function getLatestInTransactions({ accountId, days = 30 }){
  return transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
    where: {
      inAccount: accountId,
      startDate: {
        $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
      }
    }
  });
}

export function getLatestOutTransactions({ accountId, days = 30 }){
  return transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
    where: {
      outAccount: accountId,
      startDate: {
        $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
      }
    }
  });
}

export function getLatestTransactions({ accountId, days = 30 }){
  return transaction.findAll({
    attributes: ['id', 'outAccount', 'inAccount', 'amount', 'startDate', 'endDate'],
    where: {
      $or: [ {outAccount: accountId},
             {inAccount: accountId}],
      startDate: {
         $lte: new Date(new Date() - 24 * 60 * 60 * 1000 * days)
      }
    }
  });
}

export function getServicesOfAccount({ accountId })
{
    return account.findById(accountId).then(acc => {
        return acc.getServices({
            attributes: ['id', 'name', 'price', 'AccountId']
        });
    });
}

export function addTransaction({ id, accountId, forAccount, serviceId, startDate, endDate})
{
    let tran = transaction.create({
        id: id,
        outAccount: accountId,
        inAccount: forAccount,
        startDate: startDate,
        endDate: endDate,
        service: [
            {id: serviceId}
        ]
    });
/*
    tran.addService({
        id: serviceId
    });*/
}
