export default {
  name: 'imgArry',
  title: 'imgArray',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt', type: 'string' }]
        }
      ]
    }
  ]
};
