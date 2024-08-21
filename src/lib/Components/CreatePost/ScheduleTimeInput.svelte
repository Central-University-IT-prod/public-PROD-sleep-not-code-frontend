<script>
    export let schedulePostEnabled = false
    export let scheduledDatetime = ""
</script>

<div class="mb-10 flex flex-col">
    <div>
        <input
            type="checkbox"
            bind:checked={schedulePostEnabled}
            class="mr-2"
            name="schedule-post"
            id="schedule-post"
        />
        <label for="schedule-post" class="text-slate-700">Запланировать отправку</label>
    </div>
    {#if schedulePostEnabled}
        <div class="mt-5">
            <label for="datetime-input">Дата и время</label>
            <input type="datetime-local" id="datetime-input" bind:value={scheduledDatetime} />
            <!--            TODO change to a better datetime picker, maybe https://mskocik.github.io/svelty-picker/ -->
        </div>
    {/if}
</div>
