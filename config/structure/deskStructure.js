/**
{
  "name": "part:@sanity/desk-tool/structure",
  "path": "./config/structure/deskStructure.js"
},
*/

import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('JEDILIES')
    .items(
      S.documentTypeListItems()
    )

/*

*/