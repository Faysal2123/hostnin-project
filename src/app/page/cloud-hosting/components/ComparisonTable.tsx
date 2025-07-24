import React from "react";

interface ComparisonTableProps {
  data: typeof import("../../BDIX-Hosting/component/data/comparisonTableData").comparisonTableData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => (
  <div className="bg-[#f8f8f8]">
    <div className="max-w-7xl mx-auto overflow-x-auto ">
    <div className="">
    <h1 className="text-4xl font-bold text-center">Compare Cloud Hosting Plans</h1>
    <p className="text-slate-800 text-center w-6/12 mx-auto pt-4">In order to match your work, you can get the details of each plan and decide which one is suitable for you. Everything is written clearly without any hidden information. </p>
    </div>
    {data.sections.map((section, sectionIdx) => (
      <div key={sectionIdx} className="mb-10">
        <table className="w-full table-fixed border-collapse bg-white shadow-sm">
          <colgroup>
            <col className="w-1/5" />
            {data.plans.map((_, idx) => (
              <col key={idx} className="w-1/5" />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th className="border border-gray-200 p-3 bg-[#06125a] text-white text-base font-semibold w-1/5">Features</th>
              {data.plans.map(plan => (
                <th key={plan.name} className="border border-blue-200 p-3 bg-[#06125a] text-white w-1/5">
                  <div className="font-semibold">{plan.name}</div>
                  <div className="text-2xl font-semibold my-2">
                    <span className="text-yellow-400 ">৳{plan.price}</span><span className="text-sm font-normal">{plan.priceUnit}</span>
                  </div>
                  <div>
                    <button className=" bg-blue-700 px-4 py-3 rounded-sm font-semibold">Order Now</button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.features.map(feature => (
              <tr key={feature.label} className="even:bg-gray-50">
                <td className="border border-blue-200 p-3 font-medium text-gray-700 w-1/5">{feature.label}</td>
                {feature.values.map((value, idx) => (
                  <td key={idx} className="border border-blue-200 p-3 text-center w-1/5">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
  </div>
);

export default ComparisonTable; 