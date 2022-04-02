import { RootStackParamsList } from './src/navigation/types';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '@env' {
  export const USERS_BASE_URL: string;
  export const SPOTS_BASE_URL: string;
  export const MATCHING_BASE_URL: string;
  export const PAYMENTS_BASE_URLS: string;
  export const SUPPORT_BASE_URL: string;
  export const GOOGLE_API_KEY: string;
}
declare module 'rn-sliding-view';
declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamsList {}
  }
}
