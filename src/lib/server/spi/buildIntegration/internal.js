import {error} from "@sveltejs/kit";
import makeid from "$lib/server/utils/makeANid";
import {apikey} from "$lib/server/config.server";
import {saveOrder} from "$lib/server/database/orderrepository";
import crypto from "crypto";

const body = (origin, amount) => {
    const orderId = makeid(18);
    return {
        merchantUrl: origin,
        version: "1",
        order: {
            orderId: orderId,
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
            resultUrl: `${origin}/result?orderId=${orderId}`,
            cancelUrl: `${origin}/cancel?orderId=${orderId}`,
            notificationUrl: `${origin}/api/ack?orderId=${orderId}`,
        },
    };
};

export const getPayPageData = async (origin, amount) => {
    const uuid = crypto.randomUUID();
    const request = body(origin, amount);
    return saveOrder(uuid, request)
        .then(() =>
            fetch(
                "https://stg-ta.nexigroup.com/api/phoenix-0.0/psp/api/v1/orders/build",
                {
                    headers: {
                        "x-api-key": apikey,
                        "Correlation-Id": uuid,
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(request),
                    method: "POST",
                },
            ),
        )
        .then(async (response) => {
            if (response.ok) {
                const json = await response.json()
                console.log(json);
                return json;
            } else {
                const text = await response.text();
                console.log("An error occured", response.status, text);
                throw error(response.status,
                    {message: "An error occurred while invoking backend service", reason: text});
            }
        })
        .then((json) => {
            return json;
        });
};

export const pay = (body) => {
    const uuid = crypto.randomUUID();
    return fetch(
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
    )
        .then(async (response) => {
            if (response.ok) {
                const json = await response.json()
                console.log(json);
                return json;
            } else {
                const text = await response.text();
                console.log("An error occured", response.status, text);
                throw error(response.status,
                    {message: "An error occurred while invoking backend service", reason: text});
            }
        })
};
