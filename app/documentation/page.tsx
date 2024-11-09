import { AceHeading } from '@/components/global/ace-heading'
import { DocCard3d } from '@/components/global/doc-card-3d'
import { FooterComp } from '@/components/global/footer-comp'
import Navbar from '@/components/global/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
   <main>
    <Navbar/>
     <AceHeading title="Documentation"/>
     <div className="bg-black mt-[-200px]">
      <DocCard3d title="Ground Station" description="Crystal clear documentation of Ground Station and ground based devices" link="https://docs.google.com/document/d/13JkkUg4uLcLB53SXUHBx-jyHoQi1Wh-NNFFUGKkxKJ4/edit?usp=sharing" picture="/ground-station.png"/>
      <DocCard3d title="Rover" description="Documentation regarding the rover, operations and rover based sensor devices" link="https://docs.google.com/document/d/1TH0pRJxJFcyfVOQSR3bi-O2k_2o2udcRQd0Ysp4t96Y/edit?usp=sharing" picture="/rover.png"/>
      <DocCard3d title="Drone" description="Documentation regarding the drone, operations and drone based sensor devices" link="https://docs.google.com/document/d/1OOwcdkKJu9cdzTskiF-VnWa67E7-5RglieAJfuZLX0U/edit?usp=sharing" picture="/drone.jpg"/>
      <DocCard3d title="Software, Dependencies and Dashboard" description="Documentation regarding software used, dependencies required and Dashboard" link="https://docs.google.com/document/d/1RX7qlESx25kq3xh7VdbwB8tII9WrDF23kbQvMRc5N-M/edit?usp=sharing" picture="/dashboard.jpg"/>
     </div>

     <FooterComp/>
   </main>
  )
}

export default page