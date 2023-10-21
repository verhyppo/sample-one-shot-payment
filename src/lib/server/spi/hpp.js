import makeid from "$lib/server/utils/makeANid";
import { apikey } from "$lib/server/config.server";
import { saveOrder } from "../database/orderrepository";
import crypto from "crypto";
import { error } from "@sveltejs/kit";

const body = (origin, amount) => {
  const orderid = makeid(18);
  return {
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
      resultUrl: `${origin}/result?orderId=${orderid}`,
      cancelUrl: `${origin}/cancel?orderId=${orderid}`,
      notificationUrl: `${origin}/api/ack?orderId=${orderid}`,
    },
  };
};

export const createPaymentLink = async function (body) {
  const uuid = crypto.randomUUID();
  return saveOrder(uuid, body)
    .then(() =>
      fetch(
        "https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/orders/hpp",
        {
          headers: {
            "x-api-key": apikey,
            "Correlation-Id": uuid,
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(body),
          method: "POST",
        },
      ),
    )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw error(response.status, {
          message: "An error occurred while invoking backend service",
        });
      }
    });
};

function instance() {
  return {
    pay: (origin, amount) => createPaymentLink(body(origin, amount)),
  };
}

export default instance();
