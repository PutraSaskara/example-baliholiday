import React from 'react';
import BookingForm from '../../../components/BookingForm';
// import { useRouter } from 'next/navigation';

function BookingPage(slug) {
 // console.log('tourId data', slug)
 let params = slug.params.slug
 // console.log('ini params', params)

  console.log('data booking slug', params); // Now slug should be defined


  return (
    <div>
      <BookingForm slug={params} />
    </div>
  );
}

export default BookingPage;