import sanityClient from '@sanity/client'

const ymd = new Date().toISOString().slice(0,10);

const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: ymd
}
export const sClient = sanityClient(config)