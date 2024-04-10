import React from 'react'
import TourPlanList from './TourPlanList'

function TourPlan({title1, d1, title2, d2, title3, d3, title4, d4, title5, d5, title6, d6, title7, d7, title8, d8, title9, d9, link1, link2, link3, link4, link5, link6, link7, link8, link9}) {
  return (
    <div className='mt-10'>
        <h1 className="font-semibold text-[20px]">This is the plan</h1>
        <div className="space-y-6 border-l-2 border-dashed pl-5 mt-5">
                {title1 && <TourPlanList 
                    title={title1}
                    desc={d1}
                    link={link1}
                />}
                {title2 && <TourPlanList 
                    title={title2}
                    desc={d2}
                    link={link2}
                />}
                {title3 && <TourPlanList 
                    title={title3}
                    desc={d3}
                    link={link3}
                />}
                {title4 && <TourPlanList 
                    title={title4}
                    desc={d4}
                    link={link4}
                />}
                {title5 && <TourPlanList 
                    title={title5}
                    desc={d5}
                    link={link5}
                />}
                {title6 && <TourPlanList 
                    title={title6}
                    desc={d6}
                    link={link6}
                />}
                {title7 && <TourPlanList 
                    title={title7}
                    desc={d7}
                    link={link7}
                />}
                {title8 && <TourPlanList 
                    title={title8}
                    desc={d8}
                    link={link8}
                />}
                {title9 && <TourPlanList 
                    title={title9}
                    desc={d9}
                    link={link9}
                />}
        </div>
    </div>
  )
}

export default TourPlan
