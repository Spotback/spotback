import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { UserSpotPosition } from '@services/types';
import SpotExchangeDriver from './SpotExchangeDriver';
import SpotExchangeParker from './SpotExchangeParker';

export default function SpotExchangeSpotPosition() {
  const user = useSelector((state: RootStateOrAny) => state.userReducer);
  return user.UserSpotPosition === UserSpotPosition.DRIVER ? (
    <SpotExchangeDriver />
  ) : (
    <SpotExchangeParker />
  );
}
