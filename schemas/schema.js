// schema creator
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* ---------------------------------------------- */
import portableText from './objects/portableText';
import ptObj from './objects/ptObj';
import article from './documents/article';


const schemaObjs = [portableText, ptObj,];
const schmaDocs = [article,]

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(schemaObjs, schmaDocs),
});
