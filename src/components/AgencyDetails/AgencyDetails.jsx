import React from 'react';

const AgencyDetails = ({
  agencyId,
  agencyName,
  headName,
  headContactNumber,
  expertise,
  address,
  equipmentDetails,
  workforce,
  about,
  emailAddress,
}) => {
  return (
    <div className='flex flex-col gap-2 text-[#173B45]'>
      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Agency name: </span>
        {agencyName} [ID: {agencyId}]
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Head name & contact number: </span>
        {headName}, {headContactNumber}
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Expertise: </span>
        {expertise}
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Email: </span>
        {emailAddress}
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Address: </span>
        {address}
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>About: </span>
        {about}
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Equipment Details: </span>

        <div className='overflow-x-auto'>
          <table className='table-auto w-full border-collapse border border-gray-300'>
            <thead className='bg-[#173B45] text-white'>
              <tr>
                <th className='border border-gray-300 px-2 py-2'>S.no.</th>
                <th className='border border-gray-300 px-4 text-center'>
                  Equipments
                </th>
                <th className='border border-gray-300 px-4 text-center'>
                  Quanitity
                </th>
              </tr>
            </thead>
            <tbody>
              {equipmentDetails.map((equipment, index) => (
                <tr className='bg-gray-50 hover:bg-gray-100'>
                  <td className='border border-gray-300 px-4 text-center'>
                    {index + 1}.
                  </td>
                  <td className='border border-gray-300 px-4 text-center'>
                    {equipment.name}
                  </td>
                  <td className='border border-gray-300 px-4 text-center'>
                    {equipment.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h1>

      <h1 className='text-xl font-semibold'>
        <span className='font-bold'>Workforce Details: </span>

        <div className='overflow-x-auto'>
          <table className='table-auto w-full border-collapse border border-gray-300'>
            <thead className='bg-[#173B45] text-white'>
              <tr>
                <th className='border border-gray-300 px-2 py-2'>S.no.</th>
                <th className='border border-gray-300 px-4 text-center'>
                  Skill Category
                </th>
                <th className='border border-gray-300 px-4 text-center'>
                  Specific Skill
                </th>
                <th className='border border-gray-300 px-4 text-center'>
                  No. of workers
                </th>
              </tr>
            </thead>
            <tbody>
              {workforce.map((w, index) => (
                <tr className='bg-gray-50 hover:bg-gray-100'>
                  <td className='border border-gray-300 px-4 text-center'>
                    {index + 1}.
                  </td>
                  <td className='border border-gray-300 px-4 text-center'>
                    {w.skillCategory}
                  </td>
                  <td className='border border-gray-300 px-4 text-center'>
                    {w.specificSkill}
                  </td>
                  <td className='border border-gray-300 px-4 text-center'>
                    {w.numberOfWorkers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </h1>

      <div className='mb-[1rem]'></div>
    </div>
  );
};

export default AgencyDetails;
