"use client";
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import Footer from '@/components/navigation/Footer';

const PHOTOS = [
  '/images/logo.svg',
  '/images/forest.jpg',
  '/images/placeholder1.avif'
];

export default function Home() {
  return (
    <>
      <NavbarBase 
        brand="PhotonFrame" 
        leftActionLabel="Home" 
        rightActionLabel="Book a Shoot" 
        onLeftAction={() => window.scrollTo({top: 0})} 
        onRightAction={() => { /* handle booking action */ }} 
      />

      <BillboardHero 
        title="Explore Your Vision" 
        subtitle="Cinematic photography that captures the extraordinary." 
      />

      <SplitAbout 
        heading="Meet the Photographer" 
        description={
          <div>
            <p>Passionate about storytelling through images.</p>
            <p>Blending art with technology to create stunning visual narratives.</p>
          </div>
        }
      />

      <TokenBillboardHero 
        title="Booking made easy!" 
        subtitle="A seamless package selection for your perfect photoshoot." 
        contractAddress="0x12345abcde"
        copyButtonText="Copy ID"
        copiedText="Copied!"
      />

      <ExpandingGridTokenomics 
        title="Packages & Pricing" 
        description="Choose the perfect package for your needs." 
        cardItems={[
          {id: 1, title: 'Basic Package', description: 'Simple shoot, up to 15 images.'},
          {id: 2, title: 'Standard Package', description: 'Includes editing for a polished look.'},
          {id: 3, title: 'Premium Package', description: 'Full-day shoot with two locations.'}
        ]}
      />

      <CentralFAQ 
        items={[
          {title: 'How do I book?', content: 'Select a package and fill out the contact form.'},
          {title: 'What is the typical turnaround time?', content: 'Images are generally delivered within 1 week.'},
          {title: 'Can I customize my package?', content: 'Yes! Contact us for tailored options.'}
        ]} 
      />

      <Footer 
        brandWordmark="PhotonFrame" 
        links={[
          {title: 'Home', url: '#hero'},
          {title: 'About', url: '#about'},
          {title: 'Services', url: '#how-to-buy'},
          {title: 'Contact', url: '#footer'}
        ]} 
        copyrightText="© 2023 PhotonFrame"
      />
    </>
  );
}