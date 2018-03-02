var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        res.json(friends);

    });

    app.post("/api/friends", function(req, res) {

        var newMatch = {};
        var match = searchFriends(newMatch);

        newMatch.name = req.body.name;
        newMatch.photo = req.body.photo;
        newMatch.scores = req.body["scores[]"];


        friends.push(newMatch);
        res.send(match);
    })
}

function searchFriends(newMatch) {

    var friendMatch = { score: 100, index: null };
    var totalDifference = 0;
    var friendsScore = parseInt(friends[i].scores[j]);
    var matchScore = parseInt(newMatch.scores[j]) 

    for (var i = 0; i < friends.length; i++) {

        
        for (var j = 0; j < friends[i].scores.length; j++) {

            // values still show as undefined from each of the scores
            totalDifference += Math.abs(friendsScore - matchScore);

        }

        if (totalDifference < friendMatch.score) {

            friendMatch.score = totalDifference;
            friendMatch.index = i;

        };
    };

    return friends[friendMatch.index]
}