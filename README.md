# lobste.rs-node
Get `lobste.rs` stories. No dependencies.
---

`npm install lobsters`

# Usage
## Example:
```js
var lobsters = require("lobsters")

// Get the hottest stories
lobsters(function(err, stories) {
  stories.forEach(function(story) {
    console.log(story.title)
  })
})
```

[example.js](example.js) shows you one way to lay out `lobste.rs` stories.

## API
### `lobsters` -> ([hottest|newest], callback)
The first argument is an optional string specifying which stories to get.
The possible values are `"hottest"` and `"newest"`

This module follows `node.js` conventions by passing two arguments to
`callback`: `err` and `stories`.

# License
Released under the GNU GPLv3.

Copyright Médi-Rémi Hashim 2014.

See [LICENSE](LICENSE)
