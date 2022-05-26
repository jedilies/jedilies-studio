// import { FolderOpen } from '@styled-icons/ionicons-solid/FolderOpen'
// import schemaIcon from '../../components/icons/schemaIcon'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  // icon: schemaIcon(FolderOpen),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
  ],
}
