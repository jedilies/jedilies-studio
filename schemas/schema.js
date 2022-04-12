// schema creator import
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/* OBJECTS ---------------------------------------------- */
import ptext from './objects/ptext'

/* DOCUMENTS ---------------------------------------------- */
import article from './documents/article'
import bookmark from './documents/bookmark'
import category from './documents/category'
import tag from './documents/tag'
import task from './documents/task'
import testDoc from './test/testDoc'
// import venue from './test/testVenue'
// import show from './test/testShow'
// import performance from './test/testPerformance'

/* TEST ---------------------------------------------- */


/* MEDIA ---------------------------------------------- */
import imageref from './media/imageref'


/* BUILDER ---------------------------------------------- */
export default createSchema({
  // schema name
  name: 'default',
  //document types
  types: schemaTypes.concat([

    /* DOCUMENTS ---------------------------------------------- */
    article,
    bookmark,
    category,
    tag,
    task,
    imageref,
    testDoc,
    /* OBJECTS ---------------------------------------------- */
    ptext,
  ]),
})
