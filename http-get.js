var https = require("https")

module.exports = function(url, callback) {
	url = url.split("/")

	var host = url[0]
	var path = "/" + url[1]

	return https.get({
		host: host,
		path: path
	}, function(res) {
		var body = ""

		res.setEncoding("utf8")

		res.on("data", function(chunk) {
			body += chunk
		})

		res.on("end", function() {
			try {
				var data = JSON.parse(body)
			} catch (err) {
				console.error("Could not parse lobste.rs JSON", err.message)

				return callback(err)
			}

			callback(null, data)
		})
	}).on("error", function(err) {
		console.error("Error with HTTPS request:", err.message)

		callback(err)
	})
}
