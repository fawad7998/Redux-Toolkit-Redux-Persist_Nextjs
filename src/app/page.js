'use client';
import { Provider } from 'react-redux';
import Main from './home/page';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/shared/redux/store/store';

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    </>
  );
}
