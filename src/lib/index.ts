import { type Writable, writable } from "svelte/store"

export const BACKEND_BASE_URL = "http://post-pulse.ru/api"
export const TELEGRAM_BOT_NAME = "PostPulsePRODBot"

export enum postsViewMode {
    Large,
    List
}

export type Channel = {
    id: number
    name: string
}

export const currentPostsViewMode: Writable<postsViewMode> = writable(postsViewMode.Large)

export const ownedChannels: Writable<Channel[]> = writable([])

ownedChannels.update(() => [
    { id: 0, name: "PROD'24: канал финала" },
    { id: 0, name: "PROD" },
    { id: 0, name: "Центральный университет: СЛУЖЕБНЫЙ ЧАТ" },
    { id: 0, name: "ЦУ: Бизнес-игра 18.10" }
])

export const innerWindowHeight: Writable<number> = writable(0)
