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

export type Image = {
    id: number,
    noteId: number,
    key: string,
    createdAt: Date,
    deletedAt: Date | null
}

export type PartialImage = {
    id: number,
    noteId: number,
    key: string,
    files: File[]
}