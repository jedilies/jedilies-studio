import { GiBeech } from "react-icons/gi"

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: GiBeech,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      // TODO: import slugify fn -- do I want this to be legible?
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'tag',
      title: 'Tags',
      type: 'reference',
      to: {type: 'tag'}
    },
    {
      name: 'body',
      title: 'Body',
      type: 'ptext'
    }
  ],
  // TODO: add preview
}