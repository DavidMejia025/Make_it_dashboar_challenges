function isPlate(string){

	if (/^[A-Z]{3}\d{3}/.test(string)){
		return (true)
	}else{
		return (false)
	}
	
}

isPlate("AaA111")