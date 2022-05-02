// schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

/* OBJECTS ---------------------------------------------- */
import portableText from './objects/portableText';

/* DOCUMENTS -------------------------------------------- */
import category from './documents/category';
import project from './documents/project';
import article from './documents/article';

/* TEST ------------------------------------------------- */
import ptAlt from './test/ptAlt';
import timeDoc from './test/timeDoc';
import blockInputs from './test/blockInputs';


/* ------------------------------------------------------ */
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    project,
    category,
    timeDoc,
    blockInputs,
    // OBJECTS //
    portableText,
    ptAlt,
  ]),
});
