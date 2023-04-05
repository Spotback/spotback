import { RootStateOrAny } from 'react-redux';

export const userPositionSelector = (state: RootStateOrAny) => {
  return state.userReducer.userSpotPosition;
};

export const userRatingSelector = (state: RootStateOrAny) => {
  return state.userReducer.rating;
};

export const driverSelector = (state: RootStateOrAny) => {
  return state.userReducer.matchedUsersData.user;
};

export const parkerSelector = (state: RootStateOrAny) => {
  return state.userReducer.matchedUsersData.match;
};

export const driverCurrentLocationSelector = (state: RootStateOrAny) => {
  const matchedUsersData = state.userReducer.matchedUsersData;

  return matchedUsersData.body.currentLocation;
};

export const driverDesiredLocationSelector = (state: RootStateOrAny) => {
  const matchedUsersData = state.userReducer.matchedUsersData;

  return matchedUsersData.body.desiredLocation;
};

export const etaInMinutesSelector = (state: RootStateOrAny) => {
  const seconds = state.userReducer.matchedUsersData.match.etaFromSpot.value;
  const eta = Math.round(seconds / 60);

  return eta;
};

export const transactionIdSelector = (state: RootStateOrAny) => {
  const matchedUsersData = state.userReducer.matchedUsersData;
  
  return matchedUsersData.transaction._id;
};
