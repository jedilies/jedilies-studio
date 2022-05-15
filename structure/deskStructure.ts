import S from '@sanity/desk-tool/structure-builder';
import listAuthor from './listAuthor';
import listEverything from './listEverything';

export default () =>
  S.list()
    .title('JEDILIES')
    .items([
      // listAuthor,
      S.divider(),
      listEverything,
    ]);

  