import { apikey } from "$lib/server/config.server";
import crypto from "crypto";

const getOrder = async (orderId) => {
  const uuid = crypto.randomUUID();
  return fetch(
        `https://ngwecomm-dev.nexi.it/api/phoenix-0.0/psp/api/v1/orders/${orderId}`,
        {
          headers: {
            "x-api-key": apikey,
            "Correlation-Id": uuid,
            "Content-type": "application/json",
          },
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


export default () => {
    return {
      getOrder: (orderId) => getOrder(orderId)
    }
}
