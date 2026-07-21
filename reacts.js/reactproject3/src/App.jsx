import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'

const App = () => {
  const users = [
    {
      id: 1,
      coverImage: "https://picsum.photos/id/1015/800/300",
      profileImage: "https://randomuser.me/api/portraits/women/1.jpg",
      username: "@olivia01",
      personName: "Olivia Brown",
      description: "Frontend developer passionate about React and UI design.",
      mediaCount: 128,
      followersCount: "12.5K",
      followingCount: 315,
    },
    {
      id: 2,
      coverImage: "https://picsum.photos/id/1016/800/300",
      profileImage: "https://randomuser.me/api/portraits/men/2.jpg",
      username: "@ethan_dev",
      personName: "Ethan Wilson",
      description: "Building modern web apps with JavaScript and Tailwind CSS.",
      mediaCount: 95,
      followersCount: "8.2K",
      followingCount: 210,
    },
    {
      id: 3,
      coverImage: "https://picsum.photos/id/1018/800/300",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg",
      username: "@emma_codes",
      personName: "Emma Johnson",
      description: "Creative UI/UX designer and frontend enthusiast.",
      mediaCount: 180,
      followersCount: "18.7K",
      followingCount: 402,
    },
    {
      id: 4,
      coverImage: "https://picsum.photos/id/1020/800/300",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      username: "@liamtech",
      personName: "Liam Smith",
      description: "Software engineer who loves open-source projects.",
      mediaCount: 220,
      followersCount: "24.3K",
      followingCount: 180,
    },
    {
      id: 5,
      coverImage: "https://picsum.photos/id/1024/800/300",
      profileImage: "https://randomuser.me/api/portraits/women/5.jpg",
      username: "@ava_designs",
      personName: "Ava Davis",
      description: "Digital creator sharing design inspiration daily.",
      mediaCount: 156,
      followersCount: "15.9K",
      followingCount: 267,
    },
    {
      id: 6,
      coverImage: "https://picsum.photos/id/1025/800/300",
      profileImage: "https://randomuser.me/api/portraits/men/6.jpg",
      username: "@noah_js",
      personName: "Noah Miller",
      description: "JavaScript lover exploring React, Next.js, and Node.js.",
      mediaCount: 84,
      followersCount: "6.8K",
      followingCount: 195,
    },
    {
      id: 7,
      coverImage: "https://picsum.photos/id/1035/800/300",
      profileImage: "https://randomuser.me/api/portraits/women/7.jpg",
      username: "@mia_creative",
      personName: "Mia Garcia",
      description: "Photographer and travel blogger capturing every moment.",
      mediaCount: 310,
      followersCount: "31.4K",
      followingCount: 512,
    },
    {
      id: 8,
      coverImage: "https://picsum.photos/id/1039/800/300",
      profileImage: "https://randomuser.me/api/portraits/men/8.jpg",
      username: "@james_ui",
      personName: "James Anderson",
      description: "UI developer crafting beautiful and responsive websites.",
      mediaCount: 142,
      followersCount: "10.6K",
      followingCount: 289,
    },
    {
      id: 9,
      coverImage: "https://picsum.photos/id/1043/800/300",
      profileImage: "https://randomuser.me/api/portraits/women/9.jpg",
      username: "@sophia_dev",
      personName: "Sophia Martinez",
      description: "React developer sharing coding tips and tutorials.",
      mediaCount: 198,
      followersCount: "21.1K",
      followingCount: 348,
    },
  ];


  return (
    <div className='bg-blue-100 px-12 py-7 min-h-screen '>
      <Navbar />
      <span className='font-semibold '>Found 2,281 influencers</span>
      <div className=' flex gap-26 flex-wrap justify-center'>
        {users.map((user) => {
          return <Card key={user.id} data={user} />
        })}
      </div>
    </div>
  )
}

export default App
