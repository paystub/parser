const fs = require('fs')
const pdfParser = require('pdf-parse')

module.exports = function(path) {
  return pdfParser(fs.readFileSync(path)).then(pdf => ({
    path: path,
    createdDate: parseCreatedDate(pdf.info.CreationDate),
    lines: parseLines(pdf.text.split(/\r?\n/)),

  }))
}

function parseCreatedDate(raw) {
  const trimmed = raw.substring(2, raw.length)
  console.log('created date: ' + parseInt(trimmed.substring(0, 3)))
  return new Date(
    parseInt(trimmed.substring(0, 3))
  )
}

function parseLines(lines) {
  return lines
}
