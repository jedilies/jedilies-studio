
export default {
  name: 'imgSet',
  title: 'Image Set',
  type: 'document',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'images', title: 'Images', type: 'array', of: [
      {name: 'image', title: 'Image', type: 'image', options: {
        hotspot: true,
      }},
    ]},
  ]
}