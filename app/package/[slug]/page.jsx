import SinglePackage from '../../../components/SinglePackage'
import baseURL from "@/apiConfig";


async function fetchPackageData(slug) {
    // console.log('fetch slug data', slug)
  // let params = slug.params.slug
  const apiUrl = `${baseURL}/toursslug/${slug}`;


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
    const apiData = await fetchPackageData(params.slug);
    // console.log('data apiData', apiData.tour)

    const attributes = apiData.tour
    // console.log('data attributes', attributes)
    const title = attributes?.title
    const imageUrl = attributes ? attributes.image.imageUrl1 : '';
    const description = attributes ? attributes.tour_description.paragraf1 : '';
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
    // console.log('ini params', params)
  return (
    <div>
        <SinglePackage slug={params}/>
    </div>
  )
}

export default page