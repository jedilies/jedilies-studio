import S from '@sanity/desk-tool/structure-builder';

export default S.listItem()
  .title('Projects')
  .child(S.documentTypeList('project'));
