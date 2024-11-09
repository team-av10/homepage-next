
import { AceHeading } from '@/components/global/ace-heading'
import { FooterComp } from '@/components/global/footer-comp'
import Navbar from '@/components/global/Navbar'
import { ProductCard } from '@/components/global/product-card'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className="bg-black">
        <Navbar/>
        <section>
        <AceHeading title="Products"/>
        </section>
        <section className="flex items-center justify-center flex-col mt-[-150px] space-y-20">
        <ProductCard title="Ground Station Kit" description="Ground station kit which combines all the essential sensors for better water and weather tracking by leveraging groundbased data" image="/ground-station-1.png"/>
        <ProductCard title="Drone for remote sensing" description="Drone kit which combines all the essential sensors for better water and weather tracking by leveraging aerial-view and thermal imaging" image="/drone.jpg"/>
        <ProductCard title="Rover for accuracy" description="Rover kit which combines all the essential sensors for better water and weather tracking by leveraging groundbased data" image="/rover.png"/>
       
        </section>
        <FooterComp/>
    </main>
  )
}

export default page