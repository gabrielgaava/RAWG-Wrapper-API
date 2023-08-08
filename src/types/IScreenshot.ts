export interface IScreenshot {
    id: number,
    image: string,
    width: number,
    height: number,
    is_deleted: boolean
}

export interface IScreenshotResponse {
    count: number,
    next: string,
    previous: string,
    results: IScreenshot[]
}

export interface IShortScreenshots {
    id: number,
    image: string,
}