import { writable, readable } from 'svelte/store';
import sanity from './sanity';
import type { SanityDocument } from '@sanity/client';
import type { PopupObj } from './ts-interfaces';

/**
 * WRITABLE EXPORTS
 */
export let popupObj = writable<PopupObj>(null);


/**
 * SANITY FETCH FUNCTIONS
 */
const getPageContent = async (page: string): Promise<SanityDocument> => {
    const query = `*[_type == '${page}'][0]`;
    const res = await sanity.fetch(query);
    if (res) return res;
    else return null;
};

const getSchedule = async (): Promise<{ headers, rows } | null> => {
    const query = `*[_type == 'schedule'][0]`;
    const res = await sanity.fetch(query);
    if (res?.exerciseSchedule?.rows?.length) {
        const tempRows = res.exerciseSchedule.rows;
        if (!tempRows?.length || !tempRows[0].cells?.length) return null;

        const headers = tempRows[0].cells;
        tempRows.shift();
        const rows = tempRows;

        console.log('headers, rows :>> ', headers, rows);
        return { headers, rows };
    }
    else return null;
}

/**
 * READABLE EXPORTS
 */
export const index = readable(null, set => {
    getPageContent('index').then(set).catch(err => console.error(err));
});

export const aktuality = readable(null, set => {
    getPageContent('aktuality').then(set).catch(err => console.error(err));
});

export const cviceni = readable(null, set => {
    getPageContent('cviceni').then(set).catch(err => console.error(err));
});

export const kontakt = readable(null, set => {
    getPageContent('kontakt').then(set).catch(err => console.error(err));
});

export const osobni_profil = readable(null, set => {
    getPageContent('osobni_profil').then(set).catch(err => console.error(err));
});

export const rozpis_lekci = readable(null, set => {
    getPageContent('rozpis_lekci').then(set).catch(err => console.error(err));
});

export const events = readable(null, set => {
    getPageContent('events').then(set).catch(err => console.error(err));
});

export const schedule = readable(null, set => {
    getSchedule().then(set).catch(err => console.error(err));
});
