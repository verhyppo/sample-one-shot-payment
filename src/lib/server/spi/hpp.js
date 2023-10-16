import makeid from "$lib/server/utils/makeANid";
import { apikey } from "$lib/server/config.server";
const body = (origin, amount) => {
  return {
    version: "1",
    order: {
      orderId: makeid(18),
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
      resultUrl: `${origin}/result`,
      cancelUrl: `${origin}/cancel`,
      notificationUrl:
        "https://xpay.nexigroup.com/phoenix-0.0/hostedfields-demo-v1/result_hpp.html",
    },
  };
};

export const createPaymentLink = async function (body) {
  return fetch(
    "https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/orders/hpp",
    {
      headers: {
        "x-api-key": apikey,
        "Correlation-Id": "ca732701-f161-482b-b815-8f70f8ee7b9e",
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
      method: "POST",
    },
  )
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
