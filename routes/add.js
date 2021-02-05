var data = require("../data.json");

exports.addFriend = function(request, response) {   
	response.render('index', data);

	// Your code goes here
	var n = request.query.name;
	console.log("name of new friend: " + n);
	var desc = request.query.description;
	console.log("description of new friend: " + desc);
	var newFriend = {
		"name": n,
		"description": desc,
		"imageURL": "https://img.icons8.com/pastel-glyph/2x/person-male.png"
	};
	data.friends.push(newFriend);

}