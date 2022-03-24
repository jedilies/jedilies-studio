import sanityClient from '@sanity/client'

const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2022-03-20'
}
export const sanityConfig = sanityClient(config)