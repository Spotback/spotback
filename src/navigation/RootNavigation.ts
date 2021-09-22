import * as React from 'react';

export const navigationRef = React.createRef() as any;

export function navigate(name: string, params?: any) {
  console.log('root nav ', name, params);
  navigationRef.current?.navigate(name, params);
}
