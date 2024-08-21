export type PostData = {
    channelId: number
    name: string
    text: string
    comment: null | string
    scheduledAt: null | string
}

export type ApiPost = {
    id: number
    channelId: number
    text: string
    comment: string | null
    scheduledAt: string | null
    updatedAt: string
    name: string
}

export type AuthData = {
    id: 0
    firstName: string
    lastName: string
    username: string
    photoUrl: string
    authDate: string
    hash: string
}
