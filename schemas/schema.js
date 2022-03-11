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
import aritcleMd from './documents/aritcleMd'
/* TEST ---------------------------------------------- */
import address from './test/address'
import socials from './test/socials'
import performance from './test/gflPerformance'
import show from './test/gflShow'
import ticket from './test/gflTicket'

/* MEDIA ---------------------------------------------- */
import favicon from './test/favicon'

/* BUILDER ---------------------------------------------- */
export default createSchema({
  // schema name
  name: 'default',
  //document types
  types: schemaTypes.concat([

    /* DOCUMENTS ---------------------------------------------- */
    article,
    aritcleMd,
    bookmark,
    category,
    tag,
    task,
    favicon,
    socials,
    address,
    show,
    performance,
    ticket,

    /* OBJECTS ---------------------------------------------- */
    ptext,
  ]),
})
