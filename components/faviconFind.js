/*
https://icon.horse/icon/icon.horse

fqdn: https://icon.horse/icon/sanity.io
uri: https://icon.horse/icon/?uri=https://sanity.io

https://icon.horse/icon/hyperdrive.sanity.build/
https://icon.horse/icon/?uri=https://hyperdrive.sanity.build/desk
*/

const fetch = require('node-fetch')

const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'

fetch(imageUrl)
  .then(res => res.buffer())
  .then(buffer => client.assets.upload('image', buffer))
  .then(assetDocument => {
    // ...
  })