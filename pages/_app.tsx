import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';

import '../styles/globals.css';
import { store } from '../src/app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
}

export default MyApp;
