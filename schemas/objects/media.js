export default {
  name: 'media',
  title: 'Image',
  type: 'image',
  fields: [
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    { name: 'attribution', type: 'string', title: 'Attribution' },
  ],
  options: {
    hotspot: true,
    storeOriginalFilename: false,
    metadata: [
      'blurhash', // Default: included
      'lqip', // Default: included
      'palette', // Default: included
      // 'exif',       // Default: not included
      // 'location',   // Default: not included
    ],
  },
}
