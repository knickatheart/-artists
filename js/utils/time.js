export const getTime = () => {
	let date = new Date();
	let splitted = date.toString().split(' ')

	return splitted[0] + ', ' + splitted[1] + ' ' + splitted[2] + ' ' + splitted[3] + ', ' + splitted[4]
}