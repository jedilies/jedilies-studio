import { Documents, DocumentText } from 'styled-icons/ionicons-solid'
import schemaIcon from '../../components/icons/schemaIcon'

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: schemaIcon(Documents),
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category.title',
    },
    prepare({ title, category, media }) {
      return {
        title: title,
        subtitle: category || 'No category',
        media: media || schemaIcon(DocumentText), // BUG: alt icon not loading
      }
    },
  },
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      weak: true,
      to: { type: 'author' },
      options: { disableNew: true },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category', weak: true },
          options: { disableNew: true },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'media',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
      options: {
        //Locks menu from creating new tags (defaults to false)
        frozen: false,
        //Preset of tags (defaults to empty)
        // preload: [{label: "Oranges", value: "oranges"}, {label: "Apples", value: "apples"}],
        //Closes menu after tag selected (defaults to true)
        closeMenuOnSelect: true
      }
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
    },
  ],
}
