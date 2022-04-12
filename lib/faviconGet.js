// import studioClient from './studioClient'






/*
icon horse: https://icon.horse/
url return: https://icon.horse/icon/jedilies-julesjazz.vercel.app


client.assets
  .upload('image', createReadStream(filePath), {
    filename: basename(filePath)
  })
  .then(imageAsset => {
    // Here you can decide what to do with the returned asset document. 
    // If you want to set a specific asset field you can to the following:
    return client
      .patch('some-document-id')
      .set({
        theImageField: {
          _type: 'image',
          asset: {
            _type: "reference",
            _ref: imageAsset._id
          }
        }
      })
      .commit()
  })
  .then(() => {
    console.log("Done!");
  })
*/