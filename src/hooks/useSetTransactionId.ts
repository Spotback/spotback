import { useSelector } from 'react-redux';
import { driverSelector, parkerSelector } from '../services/selectors';

function useSetTransactionId() {
  const driver = useSelector(driverSelector);
  const parker = useSelector(parkerSelector);

  const driverEmail = driver.email.split('@');
  const parkerEmail = parker.email.split('@');
  const transactionId = `${driverEmail[0]}&${parkerEmail[0]}`;

  return transactionId;
}

export { useSetTransactionId };
