import { getPhotos } from "../state/slices/photoSlice";

export function useApi() {
    const data = getPhotos()

    console.log(data)
}