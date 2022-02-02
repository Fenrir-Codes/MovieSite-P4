export interface IMovie{
    movieId?:number,
    directorId?: number,
    title?: string,
    description?: string,
    language?: string,
    country?: string,
    genre?: string,
    duration?: Date,
    rating?: number,
    releaseDate?: Date,
    image?:string
    videoUrl?: string,
    thumbImage?: string

}