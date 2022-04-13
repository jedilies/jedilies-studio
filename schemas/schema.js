// schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

/* OBJECTS ---------------------------------------------- */
import ptext from './objects/ptext';

/* DOCUMENTS -------------------------------------------- */
import category from './documents/category';
import tag from './documents/tag';
import article from './documents/article';
import colors from './documents/colors';


/* ------------------------------------------------------ */
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    colors,
    category,
    tag,
    ptext,
  ]),
});
