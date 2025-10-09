export type Note = {
    id: number,
    title: string,
    text: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}

export type PartialNote = {
    title: string,
    text: string,
}