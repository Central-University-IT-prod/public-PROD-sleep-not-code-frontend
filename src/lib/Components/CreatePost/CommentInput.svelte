<script lang="ts">
    export let comment: string
</script>

<div class="mb-10 flex flex-col">
    <label for="comment" class="mb-2 text-slate-700">Пометка (например, мем или опрос)</label>
    <input
        type="text"
        id="comment"
        bind:value={comment}
        class="w-full rounded-md border border-slate-300 px-4 py-2 focus:outline-cyan-500"
    />
</div>
