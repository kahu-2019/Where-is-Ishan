import request from 'superagent'


// apiImgReq = `https://maps.googleapis.com/maps/api/staticmap?center=${latLong}&${zoom}&scale=1&size=600x300&maptype=satellite&format=png&visual_refresh=true&key=AIzaSyAHciFTN54JS1w-iheiqpAN47wvNbx889I`

// randy = () => {
// 	return rand = Math.floor(Math.random() * 10) + 1  
// }//really helpful if it can get three numbers

function generateRandomArr(truePlaceId){
	var randy = []
	while(randy.length < 3){
    var r = Math.floor(Math.random()*10) + 1;
    if(!truePlaceNum && randy.indexOf(r) === -1 ) randy.push(r);
	}
	randy.push(truePlaceId)
	console.log(randy)
	return randy
}


export function getPlaceName(generateRandomArr){
	return request.get('/api')
	.then(
		res => {
			console.log(res.body)
			return res.body
		}
	)
}