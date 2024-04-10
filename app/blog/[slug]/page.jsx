import SingleBlog from "../../../components/SingleBlog"
import baseURL from "@/apiConfig";

async function fetchBlogData(slug) {
  // console.log('fetch slug data', slug)
// let params = slug.params.slug
const apiUrl = `${baseURL}/single-blog-slug/${slug}`;


return fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    // console.log('ini datanya', data);
    return data; 
  })
  .catch((error) => {
    console.error("Error:", error);
  });
}


export async function generateMetadata({ params }, parent) {
  try {
    const apiData = await fetchBlogData(params.slug);
    // console.log('data apiData', apiData)

    const attributes = apiData.blog
    // console.log('data attributes', attributes)
    const title = attributes?.title
    const imageUrl = attributes ? attributes.blogimage.imageUrl1 : '';
    const description = attributes ? attributes.blog_paragraf.paragraf1 : '';
    const keywords = attributes ? attributes.keywords : '';


    const previousImages = (await parent)?.openGraph?.images || [];

    return {
      title,
      description,
      keywords,
      openGraph: {
        images: imageUrl ? [imageUrl, ...previousImages] : previousImages,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      title: "Default Title",
      openGraph: {
        images: [],
      },
    };
  }
}

function page(slug) {
  // console.log('tourId data', slug)
    let params = slug.params.slug
    // console.log('ini params blog', params)
  return (
    <div>
        <SingleBlog slug={params}/>
    </div>
  )
}

export default page