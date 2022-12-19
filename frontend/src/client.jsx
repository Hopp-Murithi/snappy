import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId:"s45lic2u",
    dataset:'production',
    apiVersion:'2022-12-02',
    useCdn:'true',
    token: "skAbktrIRyca5mizwh3U4oki2gox26kEohFvc8Aanc4WsmxoMhrHcx7sj3dI68CAIwOkXSenFXWGxI7jDzgBnnugeR6oGjDUxFsAm3NkpN9yKMhiFFvVjaLPSpTTExzXCI9KdQTY6dioB6H4CqGTcAYiBWQ3IbAW4ySiV5wWvdrZnQ0DrN1x"
})

const builder= imageUrlBuilder(client);
  export const urlFor = (source)=> builder.image(source) ;