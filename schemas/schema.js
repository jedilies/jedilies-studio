import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Objects
import portableText from './objects/portableText';
import codeblock from './objects/codeblock';
import media from './objects/media';
// Documents
import category from './documents/category';
import article from './documents/article';
import author from './documents/author';
import imgSet from './documents/imgSet';
// Test
// import imgArray from './test/imgArray';


const schemaObjs = [media, portableText, codeblock];
const schemaDocs = [author, article, category, imgSet]//.map(
//   obj => (obj.liveEdit = false) && obj // <-- set liveEdit true/flase for all docs
// )
const testDocs = [];

const schemaItems = [...schemaObjs, ...schemaDocs, ...testDocs];

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(...schemaItems),
});
