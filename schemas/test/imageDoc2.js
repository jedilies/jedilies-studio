
export default {
  name: 'imageDoc2',
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
    },
    {
      name: 'description',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
}