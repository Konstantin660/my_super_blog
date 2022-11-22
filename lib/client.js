import  sanityClient  from "@sanity/client";
import imageUrlBulder from "@sanity/image-url";

export const clientConfig = {
    projectId: 'ahltib4b',
    dataset: 'production',
}

export const client = sanityClient({
    projectId: clientConfig.projectId,
    dataset: clientConfig.dataset,
    apiVersion: '2022-11-21',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true,
    ignoreBrowserTokenWarning: true
});

const builder = imageUrlBulder(client);

export const urlFor = (source) => builder.image(source);