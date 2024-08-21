<script lang="ts">
    import { goto } from "$app/navigation"
    import type { ApiPost } from "$lib/scripts/apiTypes"

    export let postData: ApiPost = {
        id: 12,
        channelId: 1,
        text: "sus",
        comment: null,
        scheduledAt: null,
        updatedAt: "123",
        name: "bruh"
    }
</script>

<button
    class="flex h-52 w-52 flex-col rounded-md bg-white shadow-md hover:bg-slate-200"
    on:click={() => {
        goto(`/post/${postData.id}`)
    }}
>
    <img src="https://placehold.co/600x400" alt="preview" />
    <span class="ml-2 mt-2 max-h-16 overflow-y-clip">Анонс новой олимипиады PRODANO</span>
</button>
