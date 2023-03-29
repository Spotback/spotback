import { RootStateOrAny, useSelector } from 'react-redux';

import { UserSpotPosition } from '@services/types';

function useSetTransactionId() {
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  const transactionIdInfo = useSelector(
    (state: RootStateOrAny) => state.userReducer.transactionIdInfo
  );
  const userSpotPosition = useSelector(
    (state: RootStateOrAny) => state.userReducer.userSpotPosition
  );
  const matchedUserName = transactionIdInfo.matchEmail.split('@');
  const userName = user.email.split('@');


  const transactionId = userSpotPosition === UserSpotPosition.PARKER ? `${matchedUserName[0]}&${userName[0]}&${transactionIdInfo.createdTime}` : `${userName[0]}&${matchedUserName[0]}&${transactionIdInfo.createdTime}`;

  return transactionId
}

export {useSetTransactionId}
