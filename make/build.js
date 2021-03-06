require('smoosh').config({
  "JAVASCRIPT": {
    "DIST_DIR": "./"
  , "bowser": [
        "./src/copyright.js"
      , "./src/bowser.js"
    ]
  }
  , "JSHINT_OPTS": {
      "boss": true
    , "forin": false
    , "curly": false
    , "debug": false
    , "devel": false
    , "evil": false
    , "regexp": false
    , "undef": false
    , "sub": true
    , "white": false
    , "indent": 2
    , "asi": true
    , "laxbreak": true
    , "laxcomma": true
  }
}).run().build().analyze()
