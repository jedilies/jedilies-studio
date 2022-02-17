

export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  // icon: GiLinkedRings,
  fields: [
    {
      name: 'title',
      title: 'Tag Title',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(24).warning('Title length: 3-24 characters')
    },
  ]
}