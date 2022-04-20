// schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

/* OBJECTS ---------------------------------------------- */
import portableText from './objects/portableText';

/* DOCUMENTS -------------------------------------------- */
import category from './documents/category';
import tag from './documents/tag';
import project from './documents/project';
import article from './documents/article';

/* ------------------------------------------------------ */
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([article, project, category, tag, portableText]),
});
