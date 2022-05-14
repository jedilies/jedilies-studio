import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import portableText from './objects/portableText';
import project from './categories/project';
import post from './documents/post';
import author from './categories/author';

const schemaObjs = [portableText];
const schemaCats = [project, author];
const schemaDocs = [post];

const schemaItems = [...schemaObjs, ...schemaCats, ...schemaDocs]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(...schemaItems),
});
