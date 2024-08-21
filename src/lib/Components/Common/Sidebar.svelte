<script>
    import { ownedChannels } from "$lib"
    import { goto } from "$app/navigation"
    import Home from "$lib/Components/icons/Home.svelte"
    import AddCircle from "$lib/Components/icons/AddCircle.svelte"
</script>

<nav
    class="mr-3 flex w-32 min-w-32 max-w-32 flex-col gap-2 pl-7 pt-5 md:w-80 md:min-w-80 md:max-w-80"
>
    <button
        on:click={() => {
            goto(`/`)
        }}
        class="flex flex-row items-center justify-center gap-3 px-2 py-4 hover:bg-slate-200 md:justify-start"
    >
        <Home />
        <span class="hidden text-xl md:inline">Дэшборд</span>
    </button>
    <h2 class="hidden text-xl md:inline">Каналы</h2>
    <hr class="inline h-1 md:hidden" />
    <div class="flex flex-col gap-5">
        {#each $ownedChannels as channel}
            <button
                on:click={() => {
                    goto(`/channel/${channel.id}`)
                }}
                class="flex flex-row items-center justify-center gap-3 px-2 py-4 hover:bg-slate-200 md:justify-start"
            >
                <img
                    src="https://placehold.co/400"
                    alt="channel"
                    class="h-10 w-10 rounded-full bg-blue-500"
                />
                <span class="hidden md:inline">{channel.name}</span>
            </button>
        {/each}
        <button
            on:click={() => {
                goto(`/add_channel`)
            }}
            class="flex flex-row items-center justify-center gap-3 px-2 py-4 hover:bg-slate-200 md:justify-start"
        >
            <AddCircle />
            <span class="hidden text-xl md:inline">Добавить</span>
        </button>
    </div>
</nav>
