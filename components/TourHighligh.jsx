

function TourHighligh({t1, t2, t3, t4, t5, t6, t7, t8, t9}) {
    return (
      <div className="shadow-xl px-4 py-2">
          <h1 className="mt-5 font-semibold text-center">Tour Highligh</h1>
              <ul className="mt-2 grid grid-cols-2 md:grid-cols-3 text-[14px] gap-y-4 gap-x-3">
                    <li>{t1}</li>
                    <li>{t2}</li>
                    <li>{t3}</li>
                    <li>{t4}</li>
                    <li>{t5}</li>
                    <li>{t6}</li>
                    <li>{t7}</li>
                    <li>{t8}</li>
                    <li>{t9}</li>
              </ul>
      </div>
    )
  }
  
  export default TourHighligh