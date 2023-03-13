import { Coordinate } from 'react-native-maps';
export const coordinatesSeperator = (coordinates) => {
  const coordinatesArray: number[] = [];
  const startOfMatchedCoordinates = coordinates.match(',');
  const latitude = coordinates.slice(0, startOfMatchedCoordinates.index);
  const longitude = coordinates.slice(startOfMatchedCoordinates.index, coordinates.length);
  coordinatesArray.push(Number(longitude.substring(1)), Number(latitude));
  console.log('coordinates of seperation func !!!!!!!!!!!! !!!!!!!', coordinatesArray);
  return coordinatesArray;
};
