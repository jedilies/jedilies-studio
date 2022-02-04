export default {
  title: 'Portable Text',
  name: 'ptextLite',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
      ],
      lists: [],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'}, 
          {title: 'Emphasis', value: 'em'}],
        annotations:[
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [{title: 'URL', name: 'href', type: 'url',}]
          }
        ]
      }
    },
    /* adtnl types */
    // {type: 'image', hotspot: true}
  ]
}