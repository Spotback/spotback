// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootStackParamsList } from './src/navigation/types';

declare module 'rn-sliding-view';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamsList {}
  }
}
