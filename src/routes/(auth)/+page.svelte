<script lang="ts">
    import { Login } from "sveltegram"
    import { TELEGRAM_BOT_NAME } from "$lib"
    import { postAuth } from "$lib/scripts/session"
    import { goto } from "$app/navigation"
</script>

<div class="flex h-full w-full items-center justify-center gap-5">
    <h1 class="text-3xl text-slate-700">Пожалуйста, авторизуйтесь</h1>
    <Login
        username={TELEGRAM_BOT_NAME}
        requestAccess={true}
        on:auth={(data) => {
            postAuth(data).then((res) => {
                if (res) goto("/dashboard")
                else window.location.reload()
            })
        }}
    />
</div>
