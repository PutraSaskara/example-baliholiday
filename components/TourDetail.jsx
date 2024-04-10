

function TourDetail({d1, d2, d3, d4, d5, d6, d7, d8, d9}) {
  return (
    <div>
        <h1 className="mt-5 font-semibold text-center">Tour Detail</h1>
            <ul className="mt-5 grid grid-cols-2 md:grid-cols-3 md:justify-items-center shadow-xl gap-y-5 py-5">
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
  )
}

export default TourDetail