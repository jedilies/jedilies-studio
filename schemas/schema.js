import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import portableText from './objects/portableText';
import category from './documents/category';
import article from './documents/article';
import author from './documents/author';


const schemaObjs = [portableText];
const schemaDocs = [category, author, article].map(
  // global liveEdit switch or global doc constants
  obj => (obj.liveEdit = true) && obj
)

const schemaItems = [...schemaObjs, ...schemaDocs];

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(...schemaItems),
});
