var path = require("path");
var friends = require("../data/friends.js")

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {

        res.json(friends);

    });

    app.post("/api/friends", function(req, res) {

        var newMatch = {};
        console.log(req.body)

        newMatch.name = req.body.name;
        newMatch.photo = req.body.photo;
        newMatch.scores = req.body.scores;

        var match = searchFriends(newMatch);

        friends.push(newMatch);
        res.send(match);
    })
}

function searchFriends(newMatch) {

    var friendMatch = { score: 100, index: null };
    var totalDifference = null;


    for (var i = 0; i < friends.length; i++) {
    
        
        for (var j = 0; j < friends[i].scores.length; j++) {

// console.log(newMatch);
            // values still show as undefined from each of the scores
            totalDifference += Math.abs(friends[i].scores[j] - newMatch.scores[j]);

            // the variable of scores returns undefined
            // once the variable can be converted into integer, app should function properly

        }

        if (totalDifference < friendMatch.score) {

            friendMatch.score = totalDifference;
            friendMatch.index = i;

        };
    };

    return friends[friendMatch.index]
}