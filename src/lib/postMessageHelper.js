import { store } from "$lib/store/cardDataStore";
import { iframePostMessageUrl } from "$lib/client.config.js";
import { goto } from "$app/navigation";
import notifyErrors from "$lib/store/errorStore";

const manageStateChange = async (event) => {
  const { state } = event; //handle all events
  switch (state) {
    case "CARD_DATA_COLLECTION":
      store.setFields(event.fieldSet.fields);
      goto("/build/carddata");
      break;
    case "READY_FOR_PAYMENT":
      store.setReadyForPayment();
      //location.href = "finalize_hpp.html";
      break;
    default:
      console.log(`${state} does not match with any handle. Bail.`);
      break;
  }
};
export default (evt) => {
  console.log("Event", evt);
  if (evt.origin.indexOf(iframePostMessageUrl) === 0) {
    let data = evt || "data" in evt.data ? evt.data.data : evt.data;

    const { event, id, message } = data;
    console.log("logging extracted data", data, event, id, message)
    switch (event) {
      case "BUILD_FLOW_STATE_CHANGE":
        manageStateChange(data);
        break;
      case "BUILD_ERROR":
        return notifyErrors(`${id} launched an error ${message}`);
        break;
      case "BUILD_SUCCESS":
        console.log(`${id} saying something good happened`);
        break;
      default:
        console.log(`${id} saying ${event} happened. Nothing specific to do.`);
    }
  } else {
    console.error(`Received a message we don't want to receive! ${evt.origin}`);
  }
};
