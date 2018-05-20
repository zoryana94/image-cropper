import * as Types from './types';

export function uploadImage(image) {
    return {
        imageSrc: image,
        type: Types.UPLOAD_IMAGE
    };
}

export function setCroppedImage(crop) {
    return {
        crop,
        type: Types.CROP_IMAGE
    };
}
