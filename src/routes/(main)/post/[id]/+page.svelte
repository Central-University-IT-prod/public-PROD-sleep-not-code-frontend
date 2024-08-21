<script lang="ts">
    import PicturesUpload from "$lib/Components/CreatePost/PicturesUpload.svelte"
    import FilesUpload from "$lib/Components/CreatePost/FilesUpload.svelte"
    import TextEditor from "$lib/Components/CreatePost/TextEditor.svelte"
    import NameInput from "$lib/Components/CreatePost/NameInput.svelte"
    import CommentInput from "$lib/Components/CreatePost/CommentInput.svelte"
    import ScheduleTimeInput from "$lib/Components/CreatePost/ScheduleTimeInput.svelte"
    import { BACKEND_BASE_URL, type Channel } from "$lib"
    import type { PostData } from "$lib/scripts/apiTypes"
    import SelectChannel from "$lib/Components/CreatePost/SelectChannel.svelte"
    import { goto } from "$app/navigation"
    import { onMount } from "svelte"

    let header = ""
    let comment = ""
    let bodyText = ""
    let pictures = []
    let files = []
    let channel: Channel
    let enableScheduling = false
    let scheduledDatetime = ""

    onMount(()=> {
        // TODO fix
        if (document.activeElement instanceof HTMLElement) {
            console.log("Blurring", document.activeElement)
            document.activeElement.blur()
        }
    })

    function savePost() {
        const validated = validate()

        if (!validated) return

        postPost()
    }

    function validate(): boolean {
        header = header.trim()
        comment = comment.trim()
        bodyText = bodyText.trim()

        if (header.length == 0) {
            alert("Заполните поле названия")
            return false
        }
        if (typeof channel.id === "undefined") {
            alert("Выберите канал для отправки поста")
            return false
        }
        if (bodyText.length == 0) {
            alert("Добавьте текст в тело поста")
            return false
        }

        return true
    }
    async function postPost() {
        const data: PostData = {
            channelId: channel.id,
            name: header,
            text: bodyText,
            comment: comment ? comment : null,
            scheduledAt: enableScheduling ? scheduledDatetime : null
        }

        console.log("Posting a post with data:", data)

        const response = await fetch(BACKEND_BASE_URL + "/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        console.log(response)

        if (!response.ok) {
            console.log(await response.json())
            return
        }
        goto("/")
    }
</script>

<div class="flex h-fit w-full justify-center">
    <div class="flex w-1/2 min-w-[300px] max-w-2xl bg-slate-100 p-4">
        <div class="w-full">
            <NameInput bind:header />

            <CommentInput bind:comment />

            <TextEditor bind:contents={bodyText} />

            <!--            <PicturesUpload-->
            <!--                onFileUploaded={(e) => {-->
            <!--                    console.log(e)-->
            <!--                }}-->
            <!--            />-->

            <!--            <FilesUpload-->
            <!--                onFileUploaded={(e) => {-->
            <!--                    console.log(e)-->
            <!--                }}-->
            <!--            />-->

            <SelectChannel bind:selectedChannel={channel} />

            <ScheduleTimeInput />

            <button
                type="button"
                on:click={savePost}
                class="rounded-md bg-cyan-500 px-4 py-2 text-white hover:bg-cyan-700"
                >Сохранить</button
            >
        </div>
    </div>
</div>
