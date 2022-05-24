/* eslint-disable no-empty-function */
// https://&lt;hz6n859k&gt;.<http://api.sanity.io/v1/data/stats/&lt;production|api.sanity.io/v1/data/stats/&lt;production>&gt;

// https://hz6n859k.api.sanity.io/v2021-10-21/data/stats/production

// getAttributes.js

const sanityClient = require('part:@sanity/base/client')
const client = sanityClient.withConfig({apiVersion: '2021-03-25'})

/**
 * @param {}
 * dataset: 'production'
 * query: '*'
 * resultFile: false | set to true for debugging
 */
run({
  dataset: 'production',
  resultFile: true
})

async function run ({ query = '*', dataset = 'production', resultFile = false } = {}) {
  client.clientConfig.dataset = dataset

  const response = await client.fetch(query)
  // eslint-disable-next-line
  console.log([...new Set(response.map(i => i._type))])
  const reduced = reducer(response, 'obj', [])
  const final = uniq(reduced)
  const file = resultFile ? writeFile(final) : false

  // eslint-disable-next-line
  console.log(`
    ATTRIBUTES COUNTER:
    --------------------

    dataset: ${dataset}
    query: '${query}'
    resultFile: ${file}
    count: ${final.length}
  `)
}

// -------------
// UTILS
// -------------
function reducer (item, key, array) {
  if (Array.isArray(item)) {
    array.push(`${key}___array`)
    item.forEach((subItem) => {
      reducer(subItem, `${key}[]`, array)
    })
  } else if (typeof item === 'object') {
    array.push(`${key}___object`)
    Object.keys(item).forEach((subItem) => {
      reducer(item[subItem], `${key}.${subItem}`, array)
    })
  } else {
    const type = typeof item
    array.push(`${key}___${type}`)
  }

  return array
}

function uniq (array) {
  return [...new Set(array)]
}

function writeFile (array) {
  const fs = require('fs')
  const {v4: uuidGenerator} = require('uuid')
  const file = `./${uuidGenerator()}.txt`
  fs.writeFile(file, array.join('\n'), () => {})
  return file
}
// To run the script:
// sanity exec getAttributes.js --with-user-token