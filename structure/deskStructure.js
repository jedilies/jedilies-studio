import S from '@sanity/desk-tool/structure-builder';
import listEverything from './listEverything';
// import listProjects from './listProjects';

export default () =>
  S.list()
    .title('JEDILIES')
    .items([
      // listProjects,
      // S.divider(),
      listEverything,
    ]);

  