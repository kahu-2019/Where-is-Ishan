import request from 'superagent'

// apiImgReq = `https://maps.googleapis.com/maps/api/staticmap?center=${latLong}&${zoom}&scale=1&size=600x300&maptype=satellite&format=png&visual_refresh=true&key=AIzaSyAHciFTN54JS1w-iheiqpAN47wvNbx889I`



export function generateRandomArr(truePlaceId) {

	var randy = []
	while (randy.length < 3) {
		var r = Math.floor(Math.random() * 10) + 1;
		//changed
		if (truePlaceId != r && randy.indexOf(r) === -1) randy.push(r);
	}
	randy.push(trueId)



	export function getPlaceName(generateRandomArr) {
		return request.get('/api')
			.then(
				res => {
					return res.body
				}
			)
	}