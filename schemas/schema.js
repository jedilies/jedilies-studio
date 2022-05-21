import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Objects
import portableText from './objects/portableText';
import codeblock from './objects/codeblock';
// Documents
import category from './documents/category';
import article from './documents/article';
import author from './documents/author';
// Test
import imgArray from './test/imgArray';


const schemaObjs = [portableText, codeblock];
const schemaDocs = [author, article, category]//.map(
//   obj => (obj.liveEdit = false) && obj // <-- set liveEdit true/flase for all docs
// )
const testDocs = [imgArray];

const schemaItems = [...schemaObjs, ...schemaDocs, ...testDocs];

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(...schemaItems),
});
