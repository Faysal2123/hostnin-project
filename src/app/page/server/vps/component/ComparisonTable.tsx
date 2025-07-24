import React from "react";
import { VpsComparisonTableData } from "../types/VpsComparisonTableData";
import { MdDone } from "react-icons/md";

interface ComparisonTableProps {
  data: VpsComparisonTableData;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ data }) => (
  <div className="bg-[#f8f8f8] py-8 pt-[500px]">
    <div className="max-w-7xl mx-auto overflow-x-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center text-[#06125a]">We Have the Perfect VPS Package</h1>
        <p className="text-slate-800 text-center w-full md:w-6/12 mx-auto pt-4">
          Compare our plans according to your needs
        </p>
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
                <th className="border border-gray-200 p-3 bg-[#06125a] text-white text-base font-semibold w-1/5">
                  Plan Features
                </th>
                {data.plans.map((plan, idx) => (
                  <th
                    key={plan.name}
                    className={
                      // Apply gradient for plan headers
                      `border border-blue-200 p-3 text-white w-1/5 font-semibold ` +
                      `bg-gradient-to-r from-[#0d6efd] to-[#2563eb]`
                    }
                  >
                    <div className="font-semibold">{plan.name} <span className="text-xs font-normal">৳</span></div>
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
                  <td className="border border-blue-200 p-3 font-medium text-black w-1/5 ">{feature.label}</td>
                  {feature.values.map((value, idx) => (
                    <td key={idx} className="border border-blue-200 p-3 text-center w-1/5">
                      {typeof value === "boolean" && value ? <MdDone className="inline text-blue-600  text-[1.5rem]" /> : value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="border border-blue-200 p-3"></td>
                {data.plans.map((plan, idx) => (
                  <td key={plan.name} className="border border-blue-200 p-3 text-center">
                    <button className="mt-2 bg-white border border-blue-700 text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition">
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