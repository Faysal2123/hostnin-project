import React from "react";

interface ComparisonTableProps {
  data: typeof import("../../BDIX-Hosting/component/data/comparisonTableData").comparisonTableData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => (
  <div className="bg-[#f8f8f8] pb-10">
    <div className="max-w-7xl mx-auto overflow-x-auto px-3 sm:px-4">
    <div className="py-6 sm:py-8 lg:py-10">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4">Compare Cloud Hosting Plans</h1>
    <p className="text-slate-800 text-center w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto pt-2 sm:pt-4 text-sm sm:text-base px-3 sm:px-4">In order to match your work, you can get the details of each plan and decide which one is suitable for you. Everything is written clearly without any hidden information. </p>
    </div>
    
    {/* Sticky Header Table - First Section */}
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse bg-white min-w-[600px]">
          <colgroup>
            <col className="w-1/5" />
            {data.plans.map((_, idx) => (
              <col key={idx} className="w-1/5" />
            ))}
          </colgroup>
          <thead>
            <tr>
                                <th className="border border-gray-200 p-3 sm:p-4 bg-[#06125a] text-white text-sm sm:text-base font-semibold w-1/5">Detailed Comparison</th>
                  {data.plans.map(plan => (
                    <th key={plan.name} className="border border-blue-200 p-3 sm:p-4 bg-[#06125a] text-white w-1/5">
                      <div className="font-semibold text-sm sm:text-base">{plan.name}</div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-semibold my-1 sm:my-2">
                        <span className="text-yellow-400 ">৳{plan.price}</span><span className="text-xs sm:text-sm font-normal">{plan.priceUnit}</span>
                      </div>
                      <div>
                        <button className=" bg-blue-700 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 font-semibold text-xs sm:text-sm">Order Now</button>
                      </div>
                    </th>
                  ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>

    {/* Feature Sections */}
    {data.sections.map((section, sectionIdx) => (
      <div key={sectionIdx} className="mb-0">
        {/* Section Header */}
        {sectionIdx > 0 && (
          <div className="bg-[#06125a] h-12 sm:h-14 flex items-center justify-center px-4 sm:px-6">
            <h2 className="text-white text-lg sm:text-xl font-semibold">{section.title}</h2>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="w-full table-fixed border-collapse bg-white shadow-sm min-w-[600px]">
            <colgroup>
              <col className="w-1/5" />
              {data.plans.map((_, idx) => (
                <col key={idx} className="w-1/5" />
              ))}
            </colgroup>
            <tbody>
              {section.features.map(feature => (
                <tr key={feature.label} className="even:bg-gray-50">
                  <td className="border border-blue-200 p-3 sm:p-4 font-medium text-gray-700 w-1/5 text-xs sm:text-sm">{feature.label}</td>
                  {feature.values.map((value, idx) => (
                    <td key={idx} className="border border-blue-200 p-3 sm:p-4 text-center w-1/5 text-xs sm:text-sm">{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
  </div>
  </div>
);

export default ComparisonTable; 