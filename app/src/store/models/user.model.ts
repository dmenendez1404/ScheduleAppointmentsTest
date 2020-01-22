
export interface User {
    id: string,
    username: string,
    name: string,
    first_name: string,
    last_name: string,
    location: string,
    profile_image: ProfileImage,
    banner_image: BannerImage
}

export interface ProfileImage {
    small: string,
    medium: string,
    large: string
}

export interface BannerImage {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
}
