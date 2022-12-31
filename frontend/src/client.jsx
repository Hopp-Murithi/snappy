import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:"s45lic2u",
    dataset:'production',
    apiVersion:'2022-12-02',
    useCdn:'true',
    token: process.env.REACT_TOKEN
})

const builder= imageUrlBuilder(client);
  export const urlFor = (source)=> builder.image(source) ;