<script lang="ts">
    import { Tipex } from "@friendofsvelte/tipex"
    import "@friendofsvelte/tipex/styles/Tipex.css"
    import "@friendofsvelte/tipex/styles/ProseMirror.css"
    import "@friendofsvelte/tipex/styles/Controls.css"
    import "@friendofsvelte/tipex/styles/EditLink.css"
    import "@friendofsvelte/tipex/styles/CodeBlock.css"
    import { tipexEditor } from "@friendofsvelte/tipex"
    import CustomEditorControls from "$lib/Components/CreatePost/CustomEditorControls.svelte"

    export let initialText = ""
    export let contents = initialText

    $: if ($tipexEditor) contents = $tipexEditor.getHTML()
</script>

<div class="mb-10 min-h-48 w-full">
    <label for="textEditor" class="block text-slate-700">Текстовое тело поста</label>
    <div class="editor w-full max-w-2xl bg-slate-200">
        <Tipex
            htmlContent={initialText}
            floatingMenu
            style="margin-top: 1rem; margin-bottom: 0;"
            className="min-w-2xl border border-neutral-200"
        >
            <CustomEditorControls slot="controlComponent" />
        </Tipex>
    </div>
</div>
