// schema creator import
import createSchema from 'part:@sanity/base/schema-creator'

// schema imports
import schemaTypes from 'all:part:@sanity/base/schema-type'
/* OBJECTS ---------------------------------------------- */
import ptext from './objects/ptext'
import ptextLite from './objects/ptextLite'

/* DOCUMENTS ---------------------------------------------- */
import article from './documents/article'
import category from './documents/category'
import tag from './documents/tag'

// builder
export default createSchema({
  // schema name
  name: 'default',
  //document types
  types: schemaTypes.concat([
    /* DOCUMENTS */
    article,
    category,
    tag,
    /* OBJECTS */
    ptext,
    ptextLite,
  ]),
})
