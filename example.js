var getLobstersStories = require("./index")

function padNumber(minimumSpace, number) {
	var num = String(number)

	while (num.length < minimumSpace) {
		num += " "
	}

	return num
}

getLobstersStories(function(err, stories) {
	if (err) {
		process.exit(1)
	}

	stories.forEach(function(story) {
		console.log(padNumber(3, story.score),
		            story.title,
		            "[" + story.tags.join(" ") + "]")
	})
})
