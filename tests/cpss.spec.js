const cpss = require('../cpss')
const fs = require('fs-extra')
const should = require('should')

describe('cpss', () => {
  beforeEach(() => {
    fs.removeSync('./tests/destination')
    fs.mkdirSync('./tests/destination')
  })

  it('mirrors recursively', () => {
    cpss('./tests/source', './tests/destination')

    const destFiles = fs.readdirSync('./tests/destination/__snapshots__')
    destFiles.length.should.equal(1)
    destFiles[0].should.equal('1')

    const destAFiles = fs.readdirSync('./tests/destination/a/__snapshots__')
    destAFiles.length.should.equal(1)
    destAFiles[0].should.equal('2')
  })
})