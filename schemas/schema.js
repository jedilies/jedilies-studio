// schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

/* OBJECTS ---------------------------------------------- */
import portableText from './objects/portableText';
import imageObj from './objects/imageObj';

/* DOCUMENTS -------------------------------------------- */
import category from './documents/category';
import tag from './documents/tag';
import project from './documents/project';
import article from './documents/article';

/* TEST ------------------------------------------------- */
import ptAlt from './test/ptAlt';
import timeDoc from './test/timeDoc';
import blockInputs from './test/blockInputs';
import imageDoc from './test/imageDoc';
import imageDoc2 from './test/imageDoc2';

/* ------------------------------------------------------ */
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    article,
    project,
    category,
    tag,
    timeDoc,
    blockInputs,
    imageDoc,
    imageDoc2,
    // OBJECTS //
    portableText,
    ptAlt,
    imageObj,
  ]),
});
