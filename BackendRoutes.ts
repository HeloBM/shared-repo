export enum BackendRoutes {
    Notes = "/note",
    NotesId = Notes + "/:id",
    Images = NotesId + "/image",
    ImagesId = Images + "/:id"
}
