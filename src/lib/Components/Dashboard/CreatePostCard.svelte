<script>
    import CreateRounded from "$lib/Components/icons/CreateRounded.svelte"
    import { goto } from "$app/navigation"
</script>

<button
    on:click={() => {
        goto("/post/-1")
    }}
    class="flex h-52 w-52 flex-col items-center justify-between rounded-md bg-white pt-5 shadow-md hover:bg-slate-100"
>
    <CreateRounded />
    <span class="mb-6 ml-2 text-xl">Написать новый пост</span>
</button>
