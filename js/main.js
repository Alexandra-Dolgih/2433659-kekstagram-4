import {getPhotos} from './data.js';
import {Initthumbnails} from './thumbnails.js';

const photos = getPhotos();

Initthumbnails(photos);
