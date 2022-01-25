export interface IMovie{
    movieId?:number,
    directorId?: number,
    title?: string,
    description?: string,
    language?: string,
    country?: string,
    genre?: string,
    duration?: Date,
    releaseDate?: Date,
    image?:string

}