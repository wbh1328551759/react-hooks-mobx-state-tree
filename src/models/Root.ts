import { Instance, onSnapshot, types } from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares";
import { createContext, useContext } from "react";
import { Cart } from "./Cart";
import { Counter } from "./Counter";

const RootModel = types.model({
  counter: Counter,
  cart: Cart
});

export const rootStore = RootModel.create({
  counter: {
    count: 0
  },
  cart: { items: [] }
});

connectReduxDevtools(require("remotedev"), rootStore);

onSnapshot(rootStore, snapshot => console.log("Snapshot: ", snapshot));

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store as RootInstance;
}
