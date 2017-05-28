module.exports = function main(email, suffixes) {
	var houzhui=email.split('@')[1].split('.',1);
	if(suffixes.indexOf(houzhui)>-1)
		return true;
	return false;
};
