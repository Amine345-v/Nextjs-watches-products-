import  sanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
    projectId :"5nvmphy6",
    dataset:'production',
    apiVersion:"2022-08-12",
    useCdn:true,
    token:"skcAqMiNJsUvuP4TSPM4hXUeh07r2tRh3c2CP65iGSMH23UwMQ6rFBJAV6oWgaHoU2RGMoes0kqMwS3t1SYJA3GbGfB7sznPmGIez87132GfvdtZb809qxu2fAF2tKfHgE50jYeZaWO3lhbunLLfVWfijiJ4Ajd68hWyzapWDUq2HlJIxlVZ",
}) 

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)
   