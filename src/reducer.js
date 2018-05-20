import * as Types from './types';

export function uploadImage(state, { imageSrc }) {
    return {
        ...state,
        imageSrc
    };
}

export function setCroppedImage(state, { crop }) {
    return {
        ...state,
        crop
    };
}

export default {
  [Types.UPLOAD_IMAGE]: uploadImage,
  [Types.CROP_IMAGE]: setCroppedImage
};
