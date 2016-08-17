export const FILTER = 'FILTER', BYAGE = 'BYAGE', BYRATE = 'BYRATE', INIT = 'INIT';

export const filter = (artist) => ({
	type: FILTER,
	artist
});

export const byAge = () => ({
	type: BYAGE
});

export const byRate = () => ({
	type: BYRATE
});

export const init = () => ({
	type: INIT
});