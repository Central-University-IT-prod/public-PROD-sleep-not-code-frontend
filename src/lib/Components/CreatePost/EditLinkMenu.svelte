<script lang="ts">
    import { tipexEditor } from "@friendofsvelte/tipex"

    export let enableLinkEdit = false
    let linkInput: HTMLInputElement

    function applyLinkAndSave() {
        let isValidURL =
            linkInput.value.startsWith("http://") ||
            linkInput.value.startsWith("https://") ||
            linkInput.value.startsWith("mailto:") ||
            linkInput.value.startsWith("tel:") ||
            linkInput.value.startsWith("/")
        if (linkInput.value && isValidURL) {
            $tipexEditor?.commands.setLink({ href: linkInput.value })
            enableLinkEdit = false
        }
    }
</script>

<!-- Copy-pasted from tipex's source repo and fixed the clipboard read not working in firefox by removing it-->
<!-- Source: https://github.com/friendofsvelte/tipex -->

<div class="flex flex-row gap-2">
    <button
        on:click={() => {
            enableLinkEdit = !enableLinkEdit
        }}
        class="tipex-edit-button tipex-button-extra tipex-button-rigid"
        class:active={enableLinkEdit}
    >
        <iconify-icon icon={enableLinkEdit ? "fa6-solid:xmark" : "fa6-solid:link"} />
    </button>

    {#if enableLinkEdit}
        <div class="tipex-link-edit-input-group">
            <input
                type="text"
                placeholder="Ссылка на объект"
                bind:this={linkInput}
                value={$tipexEditor?.getAttributes("link").href || ""}
            />
            <button
                class="tipex-edit-button tipex-button-extra tipex-button-free"
                type="button"
                on:click={applyLinkAndSave}
            >
                Сохранить
            </button>
        </div>
    {/if}
</div>
