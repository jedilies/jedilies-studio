export default {
  title: 'Portable Text',
  name: 'ptextLite',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        // {title: 'H1', value: 'h1'},
        // {title: 'H2', value: 'h2'},
        // {title: 'H3', value: 'h3'},
        // {title: 'H4', value: 'h4'},
        // {title: 'Quote', value: 'blockquote'}
      ],
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