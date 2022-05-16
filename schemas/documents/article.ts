export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  // preview: {
  //   select: {
  //     title: 'title',
  //     category: 'category.title',
  //     media: 'mainImage',
  //   },
  //   prepare(selection: { category: any }) {
  //     const { category } = selection;
  //     return {
  //       ...selection,
  //       subtitle: category && `${category}`,
  //     };
  //   },
  // },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
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
    {
      name: 'mdbody',
      title: 'Body(Markdown)',
      type: 'markdown',
      lines: 20,
    },
  ],
};
