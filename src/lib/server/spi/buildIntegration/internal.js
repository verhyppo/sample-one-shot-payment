import { error } from "@sveltejs/kit";
import makeid from "$lib/server/utils/makeANid";
import { apikey } from "$lib/server/config.server";
import { saveOrder } from "$lib/server/database/orderrepository";

const body = (origin, amount) => {
  return {
    merchantUrl: origin,
    version: "1",
    order: {
      orderId: `codemotion${makeid(8)}`,
      amount: amount * 100,
      currency: "EUR",
      customerId: `codemotion${makeid(5)}`,
    },
    paymentSession: {
      paymentService: "",
      actionType: "PAY",
      amount: amount * 100,
      recurrence: {
        action: "NO_RECURRING",
      },
      exemptions: "NO_PREFERENCE",
      language: "ITA",
      resultUrl: `${origin}/result`,
      cancelUrl: `${origin}/cancel`,
      notificationUrl:
        "https://xpay.nexigroup.com/phoenix-0.0/hostedfields-demo-v1/result_hpp.html",
    },
  };
};

export const getPayPageData = async (origin, amount) => {
  return fetch(
    "https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/orders/build",
    {
      headers: {
        "x-api-key": apikey,
        "Correlation-Id": "2a58383d-fb6f-4eda-a13b-aee1199bd8fe",
        "Content-type": "application/json",
      },
      body: JSON.stringify(body(origin, amount)),
      method: "POST",
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw {
          status: response.status,
          message: "An error occurred while invoking backend service",
        };
      }
    })
    .then((json) => {
      return json;
    });
};

export const pay = (body) => {
  const uuid = crypto.randomUUID();
  return saveOrder(uuid, body)
    .then(() =>
      fetch(
        "https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/build/finalize_payment",
        {
          method: "POST",
          headers: {
            "content-type": "application/json; charset=UTF-8",
            "correlation-id": uuid,
            "x-api-key": apikey,
          },
          body: JSON.stringify(body),
        },
      ),
    )
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    });
};
