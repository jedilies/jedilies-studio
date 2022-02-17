
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  // icon: GiBeech,
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
        maxLength: 96
      }
    },
    {
      name: 'categoryRef',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'}
    },
    {
      name: 'articleTagArray',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{type:'tag'}]
      }]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'ptext'
    }
  ]
}