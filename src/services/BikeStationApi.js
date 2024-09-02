import { get } from './Api';

export const fetchBikeRacks = async () => {
    return get('/bikerack');
};
