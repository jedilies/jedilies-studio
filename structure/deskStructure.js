import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list().title('JEDILIES').items(S.documentTypeListItems());
