"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { Store, AppStore } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, Persistor } from "redux-persist";

export let persistor: Persistor;

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = Store();
    persistor = persistStore(storeRef.current);
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
