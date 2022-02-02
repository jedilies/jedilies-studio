import { GiMagicPalm } from 'react-icons/gi'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: GiMagicPalm,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    }
  ]
}