<script lang="ts">
    import { type Channel, ownedChannels } from "$lib"

    export let selectedChannel: Channel
</script>

<div class="mb-7">
    <label for="channels" class="block text-slate-700">Канал для поста (пока только один)</label>
    <select
        bind:value={selectedChannel}
        id="channels"
        class="mt-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
    >
        <option selected>Выберите канал</option>
        {#each $ownedChannels as channel}
            <option value={channel}>{channel.name}</option>
        {/each}
    </select>
</div>
