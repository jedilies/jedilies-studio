// schema creator import
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/* OBJECTS ---------------------------------------------- */
import ptext from './objects/ptext'

/* DOCUMENTS ---------------------------------------------- */
import article from './documents/article'
import quickPost from './documents/quickPost'
import category from './documents/category'
import tag from './documents/tag'

// builder
export default createSchema({
  // schema name
  name: 'default',
  //document types
  types: schemaTypes.concat([

    /* DOCUMENTS ---------------------------------------------- */
    article,
    quickPost,
    category,
    tag,

    /* OBJECTS ---------------------------------------------- */
    ptext,
  ]),
})
