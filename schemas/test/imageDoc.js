
export default {
  name: 'imageDoc',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      type: 'imageObj',
      // validation: Rule => Rule.required()
      validation: Rule => Rule.custom(
        (value) => {
          if (value.image) {
            return true;
          }
          return 'Image is required';
        }
      )
    },
    {
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
}