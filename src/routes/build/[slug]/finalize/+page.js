import {error} from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */

export async function load({params, url, fetch}) {
    const orderId = params.slug;
    console.log("In load function")
    const json = await fetch(`/api/order/${orderId}`)
        .then((data) => {
            console.log(data.status);
            data.json()
        })
        .catch((e) => {
            console.log(e);
            throw error(400, e);
        });
    console.log(json)
    return json;
}
