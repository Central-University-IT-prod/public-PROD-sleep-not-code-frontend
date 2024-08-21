<script>
    import { Post } from "sveltegram"

    let darkMode = false
    let previewLink = "https://t.me/prod_final_2024/117"
</script>

<div class="flex h-[90dvh] w-full flex-row items-center gap-5 overflow-x-auto overflow-y-scroll">
    <div class="flex flex-col gap-5">
        <div class="flex flex-row items-center gap-3 text-xl">
            Enable darkmode <input type="checkbox" bind:checked={darkMode} class="size-10" />
        </div>

        <input type="text" bind:value={previewLink} class="w-96" />
    </div>
    <Post link={previewLink} {darkMode} color="#2f81f6" colorDark="#89baff" />
</div>
