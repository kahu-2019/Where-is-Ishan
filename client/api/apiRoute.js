import request from 'superagent'

// apiImgReq = `https://maps.googleapis.com/maps/api/staticmap?center=${latLong}&${zoom}&scale=1&size=600x300&maptype=satellite&format=png&visual_refresh=true&key=AIzaSyAHciFTN54JS1w-iheiqpAN47wvNbx889I`


export function getPlaceName(){
	var randy = []
	let trueId = 3

	
	while(randy.length < 3){
    var r = Math.ceil(Math.random()*10);
    if(r != trueId && randy.indexOf(r) === -1 ) randy.push(r);
	}
	randy.push(trueId)

	

	console.log(randy)
	// return randy
	return request.post('/api', randy)
		.then(
			res => {
				return res.body
			}
		)
}