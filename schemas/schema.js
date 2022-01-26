// schema creator import
import createSchema from 'part:@sanity/base/schema-creator'

// schema imports
import schemaTypes from 'all:part:@sanity/base/schema-type'

// builder
export default createSchema({
  // schema name
  name: 'default',
  //document types
  types: schemaTypes.concat([
    /* Your types here! */
  ]),
})
