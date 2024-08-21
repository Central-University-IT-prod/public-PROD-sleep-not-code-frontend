import { BACKEND_BASE_URL } from "$lib"
import type { ApiPost } from "$lib/scripts/apiTypes"
import { browser } from "$app/environment"
import { goto } from "$app/navigation"
import { redirect } from "@sveltejs/kit"

const fetchSettings = {
    method: "GET",
    headers: {
        Accept: "application/json"
    }
}

export const load = async ({ fetch, params }) => {
    console.log("Loading index:", fetch, params)

    let postsDraft: Response | null = null
    let postsScheduled: Response | null = null
    let postsSent: Response | null = null

    const mockDraftPosts = getMockDraftPosts()
    try {
        const serverOnline = await pingServer(fetch)

        if (!serverOnline) {
            throw "Network error, server offline or does not respond to ping"
        }

        postsDraft = await fetch(BACKEND_BASE_URL + `/posts/draft`, fetchSettings as RequestInit)
        postsScheduled = await fetch(
            BACKEND_BASE_URL + `/posts/scheduled`,
            fetchSettings as RequestInit
        )
        postsSent = await fetch(BACKEND_BASE_URL + `/posts/sent`, fetchSettings as RequestInit)

        if (!postsDraft.ok) {
            console.log(postsDraft.status, postsDraft.statusText, ": Draft posts")
            goToAuthIfForbidden(postsDraft?.status)
            postsDraft = null
        }
        if (!postsScheduled.ok) {
            console.log(postsScheduled.status, postsScheduled.statusText, ": Scheduled posts")
            goToAuthIfForbidden(postsScheduled?.status)
            postsScheduled = null
        }
        if (!postsSent.ok) {
            console.log(postsSent.status, postsSent.statusText, ": Sent posts")
            goToAuthIfForbidden(postsScheduled?.status)
            postsSent = null
        }

        return {
            postsDraft: postsDraft ? await postsDraft.json() : mockDraftPosts,
            postsScheduled: postsScheduled ? await postsScheduled.json() : [],
            postsSent: postsSent ? await postsSent.json() : []
        }
    } catch (e) {
        console.error(e)
        return { postsDraft: mockDraftPosts, postsScheduled: [], postsSent: [] }
    }
}

function goToAuthIfForbidden(statusCode: number | null | undefined) {
    if (statusCode != 401) {
        return
    }

    if (browser) {
        goto("/")
    } else {
        redirect(302, "/")
    }
}

function getMockDraftPosts() {
    const posts: ApiPost[] = [
        {
            id: 0,
            channelId: 0,
            text:
                "hello world hello world hello world hello world " +
                "hello world hello world hello world hello world ",
            comment: null,
            scheduledAt: null,
            updatedAt: "2024-04-01T10:54:32.540Z",
            name: "Hello world spam"
        },
        {
            id: 1,
            channelId: 0,
            text: "hello world, programmed to work and not to feel, not even sure that this is real",
            comment: "meme",
            scheduledAt: null,
            updatedAt: "2024-04-01T10:54:32.540Z",
            name: "Hello world song"
        }
    ]
    return posts
}

async function pingServer(fetchFunc: (arg0: string, arg1: RequestInit) => any): Promise<boolean> {
    try {
        const res = await fetchFunc(BACKEND_BASE_URL + "/ping", fetchSettings as RequestInit)

        console.log(res)

        if (!res.ok) {
            console.log("API Ping error!", res.status, res.statusText)
            return false
        }

        console.log("Ping success!")
        return true
    } catch (e) {
        console.log("API Ping error! Error:", e)
        return false
    }
}
