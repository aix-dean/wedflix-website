'use client'

import { Button } from '@/components/ui/button'
import { Menu, PenTool, Monitor, Upload, PartyPopper, Facebook, Instagram, Twitter, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { El_Messiri } from 'next/font/google'
import { useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const elMessiri = El_Messiri({ subsets: ['latin'] })

export default function WedFlixLanding() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] mt-16 overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/hero.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative h-full w-full flex flex-col justify-end items-start text-white pb-10" style={{ backgroundImage: 'url(/hero-bot-gradient.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 50%', backgroundPosition: 'bottom' }}>
          <h1 className={`text-white text-4xl md:text-[60px] font-semibold leading-none ${elMessiri.className} mb-6 max-w-2xl mx-4 md:mx-40`}>
            Make your<br />wedding unforgettable.
          </h1>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#d0416a] transition-colors mx-4 md:mx-40"
            onClick={() => setShowComingSoon(true)}
          >
            Download App
          </Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className={`text-center text-[#664e41] text-[40px] font-semibold leading-none ${elMessiri.className} mb-16`}>
            Show your love on a billboard.<br />
            WedFlix makes it easy.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">
            <div className="relative h-[600px]">
              <Image
                src="/phone.png"
                alt="WedFlix mobile app interface"
                fill
                className="object-contain"
              />
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/map.png"
                alt="Metro Manila billboard locations"
                fill
                className="object-cover"
              />
              <p className="text-center mt-8 text-[#1c1c1c] text-[16px] font-normal leading-none">
                Get access to premium billboard sites all over Metro Manila
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="container mx-auto px-6">
          <h2 className={`text-center text-[#664e41] text-[40px] font-semibold leading-none ${elMessiri.className} mb-16`}>
            How it works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#d0416a]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <PenTool className="w-6 h-6 text-[#d0416a]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#1c1c1c]">
                Fill In Your Information
              </h3>
              <p className="text-sm text-center text-[#6d6d6d] leading-relaxed">
                Share a few details to help us recommend the perfect billboard for your big day.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#d0416a]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-6 h-6 text-[#d0416a]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#1c1c1c]">
                Choose Your Billboard
              </h3>
              <p className="text-sm text-center text-[#6d6d6d] leading-relaxed">
                Browse a curated list of premium billboards and find the one that speaks to your heart.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#d0416a]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Upload className="w-6 h-6 text-[#d0416a]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#1c1c1c]">
                Upload Your Video
              </h3>
              <p className="text-sm text-center text-[#6d6d6d] leading-relaxed">
                Add your video—just make sure it follows our simple guidelines so it shines bright.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#d0416a]/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <PartyPopper className="w-6 h-6 text-[#d0416a]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#1c1c1c]">
                Confirm & Celebrate
              </h3>
              <p className="text-sm text-center text-[#6d6d6d] leading-relaxed">
                Secure your booking and get ready to share your love right up to the skies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="w-full">
          <h2 className={`text-center text-[#664e41] text-[40px] font-semibold leading-none ${elMessiri.className} mb-16`}>
            We help you light up the city with your love.
          </h2>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/1.png"
                    alt="WedFlix billboard 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/2.png"
                    alt="WedFlix billboard 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/3.png"
                    alt="WedFlix billboard 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/4.png"
                    alt="WedFlix billboard 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/5.png"
                    alt="WedFlix billboard 5"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/6.png"
                    alt="WedFlix billboard 6"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="pl-4 basis-auto">
                <div className="relative overflow-hidden" style={{ width: '266px', height: '200px', flexShrink: 0, aspectRatio: '133/100' }}>
                  <Image
                    src="/home-row-images/7.png"
                    alt="WedFlix billboard 7"
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#664e41] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm mb-4">Follow us and keep updated!</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="https://www.facebook.com/profile.php?id=61583122208188" target="_blank" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-xs border-t border-white/20 pt-8">
            <Link href="#" className="hover:underline">
              Terms and Policies
            </Link>
            <span>·</span>
            <Link href="#" className="hover:underline">
              Privacy Notice
            </Link>
            <span>·</span>
            <span>© WedFlix.ph</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => setShowComingSoon(true)} className="hover:opacity-80 transition-opacity">
              <Image
                src="/app-store-badge.png"
                alt="Download on App Store"
                width={135}
                height={30}
              />
            </button>
            <button onClick={() => setShowComingSoon(true)} className="hover:opacity-80 transition-opacity">
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={135}
                height={30}
              />
            </button>
          </div>
        </div>
      </footer>

      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="items-center space-y-4 pt-8">
            <div className="w-16 h-16 bg-[#d0416a] rounded-full flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-4xl font-bold text-[#664e41] text-center">
              Coming Soon!
            </DialogTitle>
            <DialogDescription className="text-center text-[#6d6d6d] text-base px-4">
              We're excited to bring this feature to you very soon!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}
