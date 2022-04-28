import { writable, readable } from 'svelte/store';
// import sanity from './sanity';
// import type { SanityDocument } from '@sanity/client';
import type { PopupObj } from './ts-interfaces';

/**
 * WRITABLE EXPORTS
 */
export let popupObj = writable<PopupObj|null>(null);


/**
 * SANITY FETCH FUNCTIONS
 */
// const getPageContent = async (page: string): Promise<SanityDocument> => {
//     const query = `*[_type == '${page}'][0]`;
//     const res = await sanity.fetch(query);
//     if (res) return res;
//     else return null;
// };

/**
 * READABLE EXPORTS
 */
// export const index = readable(null, set => {
//     getPageContent('index').then(set).catch(err => console.error(err));
// });
