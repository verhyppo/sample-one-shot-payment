import { writable } from "svelte/store";

const initialState = {
  fields: [],
  paymentStatus: "NONE",
};

const init = () => {
  const { subscribe, set, update } = writable({ ...initialState });

  return {
    subscribe,
    setFields: (fields) =>
      update((state) => {
        state.fields = fields;
        return state;
      }),
    setFieldErrorStatus: (id) =>
      update((state) => {
        state.fields
          .filter((it) => it.id === id)
          .forEach((it) => {
            it.inerror = true;
          });
        return state;
      }),
    setReadyForPayment: () => {
      update((state) => {
        console.log("Received event! ready to shoot")
        state.paymentStatus = "READY_FOR_PAY";
        return state;
      });
    },
    setPaymentStatus: (status) =>
      update((state) => {
        state.paymentStatus = status;
        return state;
      }),
    clear: () =>
      set({
        fields: [],
        total: 0,
      }),
  };
};
export const store = init();
