<script>
    import { Login } from "sveltegram"
    import { TELEGRAM_BOT_NAME } from "$lib"

    let statusText = "Waiting..."

    console.log("Loaded mobile auth page")

    statusText = "Initialized"

    function passUserData(data) {
        statusText = "passUsedData called"
        console.log(data)

        if (!data.detail) {
            statusText = "No details avail"
            test.callbackFunction({})
            return
        }

        statusText = "Details avail"
        data = data.detail
        console.log(data)

        statusText =
            "Calling func, detail: " +
            JSON.stringify({
                id: data.id.toString(),
                firstName: data.first_name,
                lastName: data.last_name ? data.last_name : "",
                username: data.username,
                photoUrl: data.photo_url,
                authDate: data.auth_date,
                hash: data.hash
            })

        test.callbackFunction(
            JSON.stringify({
                id: data.id.toString(),
                firstName: data.first_name,
                lastName: data.last_name ? data.last_name : "",
                username: data.username,
                photoUrl: data.photo_url,
                authDate: data.auth_date,
                hash: data.hash
            })
        )
    }
</script>

<div class="h-full w-full bg-green-500">
    <Login
        username={TELEGRAM_BOT_NAME}
        requestAccess={true}
        on:auth={(data) => {
            statusText = "Data received"
            console.log("Auth callback called!")
            passUserData(data)
        }}
    />
    <div class="text-md text-black">{statusText}</div>
</div>
