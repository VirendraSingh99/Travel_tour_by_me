
import React from 'react';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  { name: 'JANE SMITH', title: 'CEO & Founder', img: '/team2.jpg' },
  { name: 'MARRY DEFF', title: 'CFO', img: '/Team1.jpg' },
  { name: 'GREN JOHNSON', title: 'Manager', img: '/team3.jpg' },
  { name: 'EMILY STONE', title: 'Designer', img: '/team4.jpg' },
  { name: 'ROBERT BLACK', title: 'Tech Lead', img: '/team5.jpg' },
  { name: 'LUCY ROSE', title: 'Marketing', img: '/team8.jpg' },
  { name: 'DANIEL WHITE', title: 'Developer', img: '/team7.jpg' },
  { name: 'SARAH KING', title: 'HR Head', img: '/team.jpg' },
];

const Team = () => {
  return (
    <div className='bg-white px-4 md:px-20 py-20 text-indigoSlate-900'>
      {/* Left-Aligned Section Heading */}
      <div className='text-2xl md:text-4xl font-bold mb-12 text-left'>
        <p className='border-b-2 inline-block border-black pb-2'>Personnel 3 Columns</p>
      </div>

      {/* Cards Grid: 3 per row on md+ */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {teamMembers.map((member, index) => (
          <div key={index} className='text-center max-w-sm mx-auto'>
            {/* Image with Hover Zoom */}
            <div className='overflow-hidden  shadow-md mb-3 h-86'>
              <img
                src={member.img}
                alt={member.name}
                className='w-full h-full object-cover transform transition-transform duration-500 hover:scale-110'
              />
            </div>

            {/* Member Info */}
            <h3 className='text-base font-bold'>{member.name}</h3>
            <p className='text-sm text-gray-500 mb-2'>{member.title}</p>
            <p className='text-xs text-gray-600 mb-3 px-2'>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarks.
            </p>

            {/* Social Icons */}
            <div className='flex justify-center space-x-3 text-blue-600 text-sm'>
              <FaFacebookF className='hover:text-blue-800 cursor-pointer' />
              <FaPinterestP className='hover:text-red-600 cursor-pointer' />
              <FaTwitter className='hover:text-blue-400 cursor-pointer' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
