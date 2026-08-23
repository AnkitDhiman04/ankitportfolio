"use client"

import { Canvas } from '@react-three/fiber'
import GradientSpheres from '../components/GradientSpheres'
import TitleHeader from '../components/TitleHeader'
import { OrbitControls } from '@react-three/drei'
import { bentoSocialLinks } from '../constants'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { My } from '../components/models/My'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(() => {
    gsap.from("#card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: "#about",
        start: "top -10%",
        end: "bottom 80%",
        markers: false,
      }
    })

    gsap.from(".animated-text", {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: "#about",
        start: "top -10%",
        end: "bottom 80%",
        markers: false,
      }
    })
  }, [])

  return (
    <section id='about' className='flex-center relative px-5 md:px-0'>

      {/* bg gradient color */}
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />


      <div className='container w-full h-full md:py-40 py-20 relative z-10'>

        <TitleHeader title={"About Me"} number={"01"}
          text={"Passionate Creator, Lifelong Learner"} />

        <div className='md:pt-20 pt-10'>
          <div className='grid grid-cols-12 md:grid-rows-12 gap-5'>
            <div className='md:col-span-7 col-span-12 row-span-5'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div>
                  <img src="images/flower.svg" alt="flower" className='md:w-32 w-16 flower' />
                </div>
                <div className='pt-5'>
                  <h1 className='text-blue-50 md:text-5xl text-3xl animated-text'>Ankit Dhiman</h1>
                  <p className='md:text-2xl pt-2'>
                    I’m a passionate Front-End Developer specializing in HTML, CSS, JavaScript, React, and Bootstrap. I create dynamic, responsive websites focused on design, user experience, and staying updated with the latest technologies.

With a focus on clean code and seamless user experiences, I thrive on turning creative concepts into functional designs. Always exploring new technologies, I’m dedicated to improving my front-end development skills.
                  </p>
                </div>
              </div>
            </div>

            {/* 3D alien model */}
            <div className='md:col-span-5 col-span-12 row-span-5'>
              <div className='bg-[#d2d3d1] w-full h-full rounded-xl'>
                <div className='w-full h-full'>
                  <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 6], fov: 40 }}>
                    <OrbitControls enableZoom={false} />
                    <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={2} color={"#A855F7"} />
      <directionalLight position={[2, 0, 3]} intensity={2} color={"#38BDF8"} />

                     <My scale={10} rotation={[0,4.7,0]} position={[0,-8,0]}  />
                  </Canvas>
                </div>
              </div>
            </div>


            {/* web design card */}
            <div id='card' className='md:col-span-6 col-span-12 row-span-3'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>

            {/* UI/UX design card */}
            <div id='card' className='md:col-span-6 col-span-12 row-span-3'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium animated-text">
                    UX UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96 animated-text">
                    Seamless web or mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>

            {/* Moti  card */}
            <div id='card' className='md:col-span-4 col-span-12 row-span-4'>
              <div className='bg-black-300 rounded-2xl p-7 w-full h-full'>
                <div className="flex flex-col justify-between h-full">
                  {
                    [
                      "BE YOURSELF!",
                      "BE DIFFERENT!",
                      "BUILD DIFFERENT!"
                    ].map((text, index) => (
                      <h1
                        key={index}
                        className="gradient-title md:text-4xl text-2xl font-bold animated-text">
                        {text}
                      </h1>
                    ))
                  }
                </div>
              </div>
            </div>

            {/* bento social links */}
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                        {item.name}
                      </h1>
                    </div>
                    <div className="lg:block md:hidden group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow-up"
                        className="md:scale-100 scale-50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default About