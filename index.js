var get = require("./http-get")

module.exports = function(page, callback) {
	if (typeof page === "function") {
		callback = page
		page = "hottest"
	}

	get("lobste.rs/" + page + ".json", callback)
}
