import React from "react";
import { VpsComparisonTableData } from "../types/VpsComparisonTableData";
import { MdDone } from "react-icons/md";

interface ComparisonTableProps {
  data: VpsComparisonTableData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => (
  <div className="bg-[#f8f8f8]  lg:pt-[430px] pt-[650px]">
    <div className="max-w-7xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-blue-50">
      <div className="mb-8 px-2 sm:px-0">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-[#06125a]">We Have the Perfect VPS Package</h1>
        <p className="text-slate-800 text-center w-full sm:w-6/12 mx-auto pt-2 sm:pt-4 text-sm sm:text-base">
          Compare our plans according to your needs
        </p>
      </div>
      {data.sections.map((section, sectionIdx) => (
        <div key={sectionIdx} className="mb-10 px-2 sm:px-0">
          <table className="w-[700px] sm:w-full table-fixed border-collapse bg-white shadow-sm text-xs sm:text-base">
            <colgroup>
              <col className="w-1/5" />
              {data.plans.map(() => (
                <col key={crypto.randomUUID()} className="w-1/5" />
              ))}
            </colgroup>
            <thead>
              <tr>
                <th className="border border-gray-200 p-3 bg-[#06125a] text-white text-base md:text-2xl font-semibold w-1/5">
                  Plan Features
                </th>
                {data.plans.map(plan => (
                  <th
                    key={plan.name}
                    className={`border border-blue-200 p-3 text-white w-1/5 font-semibold bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]`}
                  >
                    <div className="font-semibold md:text-2xl">
                      {plan.name} 
                    </div>
                    <div className="text-2xl font-semibold my-2">
                      <span className="text-yellow-400">৳{plan.price}</span>
                      <span className="text-sm font-normal">{plan.priceUnit}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.features.map(feature => (
                <tr key={feature.label} className="even:bg-gray-50">
                  <td className="border border-blue-200 p-3 font-medium text-black w-1/5">
                    {feature.label}
                  </td>
                  {feature.values.map((value, i) => (
                    <td key={i} className="border border-blue-200 p-3 text-center w-1/5">
                      {typeof value === "boolean" && value ? (
                        <MdDone className="inline text-blue-600 text-[1.5rem]" />
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="border border-blue-200 p-3"></td>
                {data.plans.map(plan => (
                  <td key={plan.name} className="border border-blue-200 p-3 text-center">
                    <button className="mt-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg">
                      Order
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  </div>
);

export default ComparisonTable;
