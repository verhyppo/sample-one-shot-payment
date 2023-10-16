
/** @type {import('./$types').PageLoad} */

export async function load({ params, url, fetch }) {
    let json = await fetch("/api/build/init").then((data) => data.json()).catch((e) => {console.error(e); throw e;})
    return json;
}