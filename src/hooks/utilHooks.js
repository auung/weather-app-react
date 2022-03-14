const getIcon = (iconName) => {
	return require(`../icons/${iconName.replace(" ", "-")}.svg`);
}

export {getIcon};

//=================

const formatDate = (timestamp) => {
	return `${timestamp.getDate()}/${timestamp.getMonth()}/${timestamp.getFullYear()}`;
}

export {formatDate};

//=================

const roundTemp = (temp) => {
	temp = Math.round(temp * 10) / 10;
	if (temp.toString().split("-").join("").length > 3) {
		temp = Math.round(temp);
	}
	return temp;
}
 
export {roundTemp};

//=================

const formatCity = city => city.replace(" ", "+");
 
export {formatCity};

//=================