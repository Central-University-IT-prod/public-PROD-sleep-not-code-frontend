<script>
    import { goto } from "$app/navigation"
</script>

<div class="my-5 flex h-10 max-h-10 flex-row items-center justify-end gap-7 pl-4 pr-5">
    <a href="/" class="mr-auto text-4xl font-bold text-slate-900">POST PULSE</a>
    <button
        on:click={() => {
            goto("/login")
        }}
        class="rounded-md bg-blue-500 px-4 py-2 text-white">Логин</button
    >
    <button
        on:click={() => {
            goto("/post_preview")
        }}
        class="rounded-md bg-blue-500 px-4 py-2 text-white">Просмотр поста</button
    >
    <span class="h-10 w-10 rounded-full bg-blue-500" />
</div>
