import { BACKEND_BASE_URL } from "$lib"

export async function postAuth(data: any): Promise<boolean> {
    if (!data.detail) {
        console.log("returning...")
        return false
    }
    console.log("Posting auth...")

    data = data.detail

    try {
        let payload = {
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name ? data.last_name : "",
            username: data.username,
            photoUrl: data.photo_url,
            authDate: data.auth_date,
            hash: data.hash
        }

        console.log(payload)

        const res = await fetch(BACKEND_BASE_URL + "/access/login", {
            method: "POST",
            credentials: "include",
            headers: {
                Accept: "application/json"
            },
            body: JSON.stringify(payload)
        })

        console.log(res)
        console.log(await res.json())

        return res.ok;



    } catch (e) {
        console.error(e)
        return false
    }
}