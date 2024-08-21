<script>
    import PostCardLarge from "$lib/Components/Dashboard/PostCardLarge.svelte"
    import { currentPostsViewMode, innerWindowHeight, postsViewMode } from "$lib"
    import BurgerMenu from "$lib/Components/icons/BurgerMenu.svelte"
    import LayoutSquares from "$lib/Components/icons/LayoutSquares.svelte"
    import PostListItem from "$lib/Components/Dashboard/PostListItem.svelte"
    import CreatePostCard from "$lib/Components/Dashboard/CreatePostCard.svelte"

    export let data

    let viewIconsSize = 30

    $: console.log(data)
</script>

<div class="flex h-fit w-full flex-col">
    <div class="flex flex-row justify-end py-5 pr-20">
        <span class="flex flex-row rounded-md border-4 border-slate-200 bg-slate-200">
            <button
                on:click={() => {
                    $currentPostsViewMode = postsViewMode.List
                }}
                class={$currentPostsViewMode === postsViewMode.List
                    ? "bg-slate-50 p-2"
                    : "p-2 hover:bg-slate-100"}
            >
                <BurgerMenu size={viewIconsSize} />
            </button>
            <button
                on:click={() => {
                    $currentPostsViewMode = postsViewMode.Large
                }}
                class={$currentPostsViewMode === postsViewMode.Large
                    ? "bg-slate-50 p-2"
                    : "p-2 hover:bg-slate-100"}
            >
                <LayoutSquares size={viewIconsSize} />
            </button>
        </span>
    </div>
    {#if $currentPostsViewMode === postsViewMode.Large}
        <div
            class="flex flex-row flex-wrap gap-5 overflow-x-auto overflow-y-scroll"
            style={"height: " + ($innerWindowHeight - 200).toString() + "px;"}
        >
            <CreatePostCard />

            {#each Array(60) as _, i}
                <PostCardLarge />
            {/each}
        </div>
    {:else if $currentPostsViewMode === postsViewMode.List}
        <div class="flex flex-col gap-5">
            {#each Array(6) as _, i}
                <PostListItem />
            {/each}
        </div>
    {/if}
</div>
