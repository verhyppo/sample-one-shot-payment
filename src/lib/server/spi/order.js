import { apikey } from "$lib/server/config.server";
import { error } from "@sveltejs/kit";
import crypto from "crypto";

const getOrder = async (orderId) => {
  const uuid = crypto.randomUUID();
  return fetch(
    `https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/orders/${orderId}`,
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
        throw error(response.status, {
          message: "An error occurred while invoking backend service",
        });
      }
    })
    .then((json) => {
      return json;
    });
};

export default () => {
  return {
    getOrder: (orderId) => getOrder(orderId),
  };
};
