export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
        },
        {
          name: 'color',
          title: 'Color',
          type: 'color',
        },
        {
          name: 'code',
          title: 'Code',
          type: 'code',
        },
      ],
    },
  ],
};
