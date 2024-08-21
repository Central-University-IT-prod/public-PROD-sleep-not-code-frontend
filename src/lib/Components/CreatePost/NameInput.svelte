<script lang="ts">
    export let header: string
</script>

<div class="mb-10 flex flex-col">
    <label for="postName" class="mb-2 text-slate-700">Служебное название поста</label>
    <input
        type="text"
        id="postName"
        bind:value={header}
        class="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-cyan-500"
    />
</div>
