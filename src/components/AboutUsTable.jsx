import React from 'react'

const AboutUsTable = () => {
  return (
    <div className="mt-12">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
          <tbody className="text-[#4B3621] text-left">
            <tr className="border-b border-[#e7d8c5]">
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">
                Name of Enterprise
              </th>
              <td className="px-6 py-4">Scope Overseas</td>
            </tr>
            <tr className="border-b border-[#e7d8c5]">
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">
                Type of Enterprise
              </th>
              <td className="px-6 py-4">Micro</td>
            </tr>
            <tr className="border-b border-[#e7d8c5]">
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">
                Classification Year
              </th>
              <td className="px-6 py-4">2024-25</td>
            </tr>
            <tr className="border-b border-[#e7d8c5]">
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">Industry</th>
              <td className="px-6 py-4">Export & Trade</td>
            </tr>
            <tr className="border-b border-[#e7d8c5]">
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">
                Specialization
              </th>
              <td className="px-6 py-4">
                Handicrafts, Textiles, Home Furnishings
              </td>
            </tr>
            <tr className="border-b border-[#e7d8c5]">
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">Location</th>
              <td className="px-6 py-4">Sonipat, Haryana, India</td>
            </tr>
            <tr>
              <th className="px-6 py-4 font-medium bg-[#f5ede2]">Contact</th>
              <td className="px-6 py-4">
                +91 7838411038
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboutUsTable
