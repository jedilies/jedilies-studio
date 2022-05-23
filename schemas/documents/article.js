export default {
  name: 'article',
  title: 'Article',
  type: 'document',
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
        media: media || '',
      };
    },
  },
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: false,
      options: { layout: 'checkbox' },
    },
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
      to: { type: 'author', weak: true },
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
      title: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
    },
  ],
};
