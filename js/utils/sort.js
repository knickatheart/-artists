export const byAge = (first, last) => {
	if (first.age < last.age) return -1;
	if (first.age > last.age) return 1;
	return 0;
}

export const byRate = (first, last) => {
	if (first.rate < last.rate) return -1;
	if (first.rate > last.rate) return 1;
	return 0;
}