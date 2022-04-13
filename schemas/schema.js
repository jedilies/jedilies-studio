// schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

/* OBJECTS ---------------------------------------------- */
import ptext from './objects/ptext';


/* CLASSES ---------------------------------------------- */
import category from './classes/category';
import tag from './classes/tag';


/* DOCUMENTS -------------------------------------------- */
import article from './documents/article';


/* MEDIA ------------------------------------------------ */
import colors from './media/colors';


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
