import React from 'react';
import { useSelector } from 'react-redux';

import { UserSpotPosition } from '@services/types';
import { userPositionSelector } from '../../services/selectors';

import SpotExchangeDriver from './SpotExchangeDriver';
import SpotExchangeParker from './SpotExchangeParker';

export default function SpotExchangeSpotPosition() {
  const userPosition = useSelector(userPositionSelector);
  return userPosition === UserSpotPosition.DRIVER ? <SpotExchangeDriver /> : <SpotExchangeParker />;
}
