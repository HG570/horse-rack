import { get } from './api';

export const fetchBikeRacks = async () => {
    return get('/bikerack');
};
