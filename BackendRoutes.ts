export enum BackendRoutes {
    Notes = "/note",
    NotesId = Notes + "/:id",
    Images = "/image",
    ImagesComp = NotesId + Images,
    ImagesIdComp = ImagesComp + "/:id",
}
