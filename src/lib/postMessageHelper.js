import { store } from "$lib/store/cardDataStore";
import { iframePostMessageUrl } from "$lib/client.config.js";
import { goto } from "$app/navigation";
import notifyErrors from '$lib/store/errorStore'
export default (evt) => {
  console.log("Event", evt);
  if (evt.origin.indexOf(iframePostMessageUrl) === 0) {
    let state;
    if ("state" in evt.data) {
      state = evt.data.state;
    } else if ("data" in evt.data && "state" in evt.data.data) {
      state = evt.data.data.state;
    }

    if (state) {
      //handle all events
      switch (state) {
        case "CARD_DATA_COLLECTION":
          store.setFields(evt.data.data.fieldSet.fields);
          goto("/build/carddata");
          break;
        case "READY_FOR_PAYMENT":
          store.setReadyForPayment();
          break;
        default:
          location.href = "finalize_hpp.html";
          break;
      }
    }
    if (
      "event" in evt.data &&
      evt.data["event"] === "BUILD_ERROR" &&
      "id" in evt.data &&
      evt.data["id"]
    ) {
      notifyErrors(`An error occurred while processing payment: ${evt.data["id"]} - ${evt.data["errorCode"]}: ${evt.data["errorMessage"]}`)
    }
  }
};
