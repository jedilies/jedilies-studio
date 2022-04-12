// schema creator import
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

/* OBJECTS ---------------------------------------------- */
import ptext from './objects/ptext'

/* CLASSES ---------------------------------------------- */
import category from './classes/category'
import tag from './classes/tag'

/* DOCUMENTS ---------------------------------------------- */
import article from './documents/article'

/* BUILDER ---------------------------------------------- */
export default createSchema({
  // schema name
  name: 'default',
  //document types
  types: schemaTypes.concat([

    /* DOCUMENTS ---------------------------------------------- */
    article,
    category,
    tag,
    /* OBJECTS ---------------------------------------------- */
    ptext,
  ]),
})
