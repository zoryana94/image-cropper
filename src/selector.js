import { get } from 'lodash';
import { createSelector } from 'reselect';

export const uploadImageSelector =
    state => get(state, 'uploadImage', {});

export const setCroppedImageSelector =
    state => get(state, 'setCroppedImage', {});

export const imageSelector =
    state => get(uploadImageSelector(state), 'imageSrc', '');

export const cropSelector =
    state => get(setCroppedImageSelector(state), 'crop', null);

export const imageCropperSelector = createSelector([
    imageSelector,
    cropSelector
], (imageSrc, crop) => ({
    imageSrc,
    crop
}));
