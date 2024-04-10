function TourDetailRight({ d1, d2, d3, d4, d5, d6, d7, d8, d9 }) {
  return (
    <div className="shadow-xl px-4 py-2 bg-gray-100">
      <h1 className="mt-5 font-semibold">Tour Detail</h1>
      <ul className="mt-2 text-[14px]">
        <li>{d1}</li>
        <li>{d2}</li>
        <li>{d3}</li>
        <li>{d4}</li>
        <li>{d5}</li>
        <li>{d6}</li>
        <li>{d7}</li>
        <li>{d8}</li>
        <li>{d9}</li>
      </ul>
    </div>
  );
}

export default TourDetailRight;
