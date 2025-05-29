import React from 'react'
import prismic from '@prismicio/client'
import prismicNext from '@prismicio/next'
import config from "../slicemachine.config.json";


export const repositoryName = config.repositoryName;

export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes: [
      {
        type: "news",
        path: "/news/:uid",
      },
      {
        type: "category",
        path: "/category/:uid",
      },
    ],
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};