import makeid from "$lib/server/utils/makeANid";
import { apikey } from "$lib/server/config.server";
import {saveOrder} from "$lib/server/database/orderrepository"
import crypto from "crypto";

const expirationDate = () => {
  const date = new Date();
  date.setMonth(date.getMonth() + 2);
  console.log("Date", date);
  return date;
};

const body = (origin, amount) => {
  const orderid= makeid(18)
  return {
    version: "1",
    order: {
      orderId: orderid,
      amount: amount * 100,
      currency: "EUR",
      customerId: "codemotion" + makeid(5),
    },
    paymentSession: {
      actionType: "PAY",
      amount: amount * 100,
      recurrence: {
        action: "NO_RECURRING",
      },
      exemptions: "NO_PREFERENCE",
      language: "ITA",
      notificationUrl: `${origin}/api/ack?orderId=${orderid}`
    },
    expirationDate: expirationDate().toISOString(),
  };
};

export const createPaymentLink = async function (body) {
  const uuid = crypto.randomUUID();
  return saveOrder(uuid, body).then(() => fetch(
    "https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/orders/paybylink",
    {
      headers: {
        "x-api-key": apikey,
        "Correlation-Id": uuid,
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
      method: "POST",
    },
  ))
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return response.json();
      }
    })
    .then((json) => {
      return json;
    });
};

function instance() {
  return {
    pay: (origin, amount) => createPaymentLink(body(origin, amount)),
  };
}

export default instance();
