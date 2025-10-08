export type Note = {
    // repositorio compartilhado
    // ts-4kst shared
    // muito trabalho pra pouca alteração
    // mas ai eu clono o mesmo repositorio nos dois repositorios?
    id: string,
    title: string,
    text: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date | null,
}