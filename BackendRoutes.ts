export enum BackendRoutes {
    Notes = "/note",
    NotesId = Notes + "/:noteId",
    Images = "/image",
    ImagesComp = NotesId + Images,
    ImagesIdComp = ImagesComp + "/:imageId",
}
