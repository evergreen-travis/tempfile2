'use strict'

var TMP_DIR = require('os-tmpdir')()
var path = require('path')
var uuid = require('uuid')

function DEFAULTS () {
  return {
    ext: '',
    path: TMP_DIR,
    name: uuid.v4()
  }
}

function tempfile2 (opts) {
  // backward compatibility
  if (typeof opts === 'string') return path.join(TMP_DIR, uuid.v4() + (opts || ''))
  opts = Object.assign({}, DEFAULTS(), opts)
  return path.join(opts.path, opts.name + opts.ext)
}

module.exports = tempfile2
