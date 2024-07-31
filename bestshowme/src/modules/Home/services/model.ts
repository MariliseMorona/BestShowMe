export interface Video {
    id: string;
    title: string;
    created_at: string;
    category: string;
    hls_path: string;
    description: string;
    thumbnail: string;
    site_id: number;
    views: number;
    likes: number;
}

export interface ListVideos {
    first: number,
    prev: null,
    next: number,
    last: number,
    pages: number,
    items: number,
    data: [Video]
}