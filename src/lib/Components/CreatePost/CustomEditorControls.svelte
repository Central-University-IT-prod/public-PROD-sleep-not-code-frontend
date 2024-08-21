<script>
    import { tipexEditor } from "@friendofsvelte/tipex"
    import EditLinkMenu from "$lib/Components/CreatePost/EditLinkMenu.svelte"
</script>

<!-- Copy-pasted from tipex's source repo and customized the buttons-->
<!-- Source: https://github.com/friendofsvelte/tipex -->

<div class="tipex-controller">
    <div class="tipex-basic-controller-wrapper">
        <button
            on:click={() => $tipexEditor?.chain().focus().toggleBold().run()}
            class:active={$tipexEditor?.isActive("bold")}
            class="tipex-edit-button tipex-button-extra tipex-button-rigid"
        >
            <iconify-icon icon="fa6-solid:bold" />
        </button>

        <button
            on:click={() => $tipexEditor?.chain().focus().toggleItalic().run()}
            class:active={$tipexEditor?.isActive("italic")}
            class="tipex-edit-button tipex-button-extra tipex-button-rigid"
        >
            <iconify-icon icon="fa6-solid:italic" />
        </button>

        <button
            on:click={() => $tipexEditor?.chain().focus().toggleCode().run()}
            class:active={$tipexEditor?.isActive("code")}
            class="tipex-edit-button tipex-button-extra tipex-button-rigid"
        >
            <iconify-icon icon="fa6-solid:code" />
        </button>

        <EditLinkMenu />
    </div>
    <slot />
</div>
