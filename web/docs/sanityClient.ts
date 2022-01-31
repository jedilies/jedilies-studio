import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'hz6n859k',
  dataset: 'production',
  useCdn: true
})