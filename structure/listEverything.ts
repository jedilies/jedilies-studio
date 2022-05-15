import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('All Content')
  .child(S.list().title('All Content').items(S.documentTypeListItems()));
