// import Image from "next/image";

// function ProfileHeader() {
//     return (
//         <div className="grid grid-cols-3 p-2">
//             <div className="w-full flex items-center justify-center">
//                 <img src="profile_img.png" alt="Profile Imge" className="border-2 h-44 rounded-lg" />
//                 {/* <Image src={"/profile_img.png"} width={200} height={240} /> */}
//             </div>
//             <div className="w-full flex flex-col items-center justify-center font-serif">
//                 <h2 className="text-6xl ">Shaik Shajahan</h2>
//                 <div className="flex divide-x-2">
//                     <p className="p-2">shajahan.j2se@gmail.com</p>
//                     <p className="p-2">+91 9000425100</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProfileHeader;
/* This example requires Tailwind CSS v2.0+ */
import { NewspaperIcon, PhoneIcon, SupportIcon, BriefcaseIcon, AcademicCapIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Qualification from './qualification';

const data = [
    {
        id: 0,
        name: 'Experience',
        description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
        icon: BriefcaseIcon,
    },
    {
        id: 1,
        name: 'Personal Projects',
        description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
        icon: PencilAltIcon,
        data:[
            {
                id:0,
                name:'',
                content:''
            }
        ]
    },
    {
        id: 2,
        name: 'Skills & Qualification',
        description:
            'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
        icon: AcademicCapIcon,
        data: {
            qualification: [
                {
                    id: 1,
                    name: 'Master of Technology in Computer Science & Engineering from 2017 to 2020',
                    content: 'I got master of Technology certificate from Teegala Krishna Reddy Engineering College, Approved by AICTE, New Delhi and Permanent Affiliation to Jawaharlal Nehru Technological University, Hyderabad, Accredited by NBA & NAAC "A" Grade. Located in the area Medbowli, Meerpet, Saroornagar, Hyderabad.'
                },
                {
                    id: 1,
                    name: 'Bachelor of Technology in Computer Science & Engineering from 2013 to 2017',
                    content: 'I got Bachelor of Technology certificate from Madhira Institute of Technology and Science, Affiliation to Jawaharlal Nehru Technological University, Hyderabad. Located in Kodad, Suryapet District, Telangana.'
                },
                {
                    id: 1,
                    name: 'HSC(Higher Secondary School Certificate)/ Intermediate from 2011 to 2013',
                    content: 'My Intermediate completed in Priyadarshini Junior College. Located in Huzur Nagar, Surypet District, Telangana.'
                },
                {
                    id: 1,
                    name: 'SSC(Secondary School Certificate) from 2010 to 2011',
                    content: 'I did Schooling n Zilla Parishat High School. Located in Amaravaram Village, Surypet District, Telangana.'
                }],
            skills: [
                {
                    point: 'Good knowledge on Fornt-end and Back-end development of Web Applications.',
                },
                {
                    point: 'Programming Languages Known, HTML, CSS, JavaScript and Frameworks : React, Next js, Angular, Tailwind CSS, Nest js, Express js, MongoDB.',
                },
                {
                    point: 'Good awareness on SQL',

                },
                {
                    point: 'Knowledge on Visual Studio Code, Unity 3D Game Engine, MS-OFFICE, WPS.',

                },
                {
                    point: 'Easily recognize structure of programming.',

                },
                {
                    point: 'Quick learner and self motivating.',

                },
                {
                    point: 'Passion of developing new things and my work.',

                },
                {
                    point: 'Always learn new things. ',

                }
            ]


        }

    },
]

export default function ProfileHeader() {
    const [showhide, setShowHide] = useState<boolean>(true)
    let [profileData, setProfileData] = useState<any>(data);
    const [singlData, setSingleData] = useState<any>(null)
    // console.log(profileData[0])
    const show = (id: number) => {
        // setIndex(id)
        // console.log(id)
        // supportLinks = supportLinks[id]
        // setProfileData(profileData[id])
        setSingleData(profileData[id])
        setShowHide(false)
        console.log(profileData[id])

    }
    const hide = (id: any) => {
        setSingleData(null);
        setShowHide(true)

    }
    return (
        <div className=" font-serif">
            {/* Header */}
            <div className="relative pb-32 bg-gray-800">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover -scale-x-100"
                        src="profile.jpeg"
                        alt="Profile Background"
                    />
                    <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
                </div>

                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-2 lg:px-4">
                    <div className="flex items-center space-x-1 p-2">
                        <img src="profile_img.png" alt="Profile Imge" className=" h-44  rounded-full border-2" />
                        <div>
                            <h1 className="text-4xl tracking-tight text-white md:text-5xl lg:text-6xl">Shajahan Shaik</h1>
                            <div className="lg:flex lg:flex-row flex-col lg:divide-x-2 divide-x-0 text-white">
                                <p className="p-2 flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg><span>shajahan.fsdev@gmail.com</span></p>
                                <p className="p-2 flex space-x-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg> <span>+91 9000425100</span></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Overlapping cards */}
            <section
                className="-mt-32 max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Contact us
                </h2>
                {singlData == null ? <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8 ">
                    {profileData.map((link) => (
                        <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-10 px-6 pb-4 md:px-8">
                                <div className="absolute top-0 p-3 inline-block bg-indigo-500 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                                <p className="mt-4 text-base text-gray-500">{link.description}</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                {showhide ? <a onClick={() => show(link?.id)} className="text-base cursor-pointer font-medium text-indigo-700 hover:text-indigo-600">
                                    See More<span aria-hidden="true"> &rarr;</span>
                                </a> :
                                    <a onClick={() => hide(link?.id)} className="text-base font-medium cursor-pointer text-indigo-700 hover:text-indigo-600">
                                        <span aria-hidden="true"> &larr;</span>Back
                                    </a>}
                            </div>
                        </div>
                    ))}
                </div>
                    :
                    <div className="grid grid-cols-1 gap-y-20 lg:gap-y-0 lg:gap-x-8 transform ease-in-out ">

                        <div key={singlData.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
                            <div className="flex-1 relative pt-10 px-6 pb-8 md:px-8">
                                <div className="absolute top-0 p-3 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                                    <singlData.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                {/* <h3 className="text-2xl font-bold text-gray-900">{singlData.name}</h3> */}
                                <div className="mt-4 ">
                                    {singlData.id == 2 ? <Qualification props={singlData.data} /> : null}
                                </div>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                                {showhide ? <a onClick={() => show(singlData?.id)} className="text-base cursor-pointer font-medium text-indigo-700 hover:text-indigo-600">
                                    See More<span aria-hidden="true"> &rarr;</span>
                                </a> :
                                    <a onClick={() => hide(singlData?.id)} className="text-base font-medium cursor-pointer text-indigo-700 hover:text-indigo-600">
                                        <span aria-hidden="true"> &larr;</span>Back
                                    </a>}
                            </div>
                        </div>

                    </div>
                }
            </section>
        </div>
    )
}
