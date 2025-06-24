// lib/prismicio.js
import * as prismic from '@prismicio/client'

export const repositoryName = 'newsslice' // replace with your repo name

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, config)
  return client
}
