import Link from 'next/link'
import AppDetails1 from '../components/Home1/AppDetails1'
import AppSlider1 from '../components/Home1/AppSlider1'
import Download1 from '../components/Home1/Download1'
import Features1 from '../components/Home1/Features1'
import FeaturesContent from '../components/Home1/FeaturesContent'
import Team1 from '../components/Home1/Team1'
import Testimonial1 from '../components/Home1/Testimonial1'
import Try1 from '../components/Home1/Try1'
import Layout1 from '../layouts/Layout1'

export default function Home() {

  return (
    <>
      <Layout1>
        <AppSlider1/>
        <Features1/>
        <FeaturesContent/>
        <Team1/>
        <AppDetails1/>
        <Download1/>
        <Testimonial1/>
        <Try1/>
      </Layout1>
    </>
  )
}
