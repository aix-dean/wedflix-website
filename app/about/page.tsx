import { Button } from '@/components/ui/button'
import { Menu, Heart, Star, Facebook, Instagram, Twitter, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-[#d8dce0]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-2xl font-bold text-[#1c1c1c]">
              wed<span className="italic">flix</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#6d6d6d] hover:text-[#1c1c1c] text-sm">
              {"Be Our Partner"}  
            </Link>
            <Link href="#" className="text-[#6d6d6d] hover:text-[#1c1c1c] text-sm">
              About Us 
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-[#6d6d6d] hover:text-[#1c1c1c] mb-12 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>

          {/* Logo Section */}
          <div className="text-center mb-16">
            <div className="mb-8 relative inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wedflix%20logo%202-P9MdrS4U5jflecgmNPFGyfPwWLSZTe.png"
                alt="WedFlix Logo"
                width={400}
                height={120}
                className="w-full max-w-md mx-auto h-auto"
                priority
              />
            </div>

            <div className="mb-12">
              <p className="text-sm text-[#6d6d6d] mb-3">by</p>
              <div className="flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%2019-0ayF9CVqVkb3honh0191govRnfTyY1.png"
                  alt="The Wedding Portal"
                  width={150}
                  height={50}
                  className="h-auto w-auto max-h-16"
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-serif text-center mb-12 text-[#664e41] text-balance">
            We are WedFlix, proudly brought to you by The Wedding Portal.
          </h1>

          {/* Mission Statement */}
          <div className="text-center mb-16">
            <p className="text-lg text-[#6d6d6d] leading-relaxed max-w-3xl mx-auto">
              At The Wedding Portal, our mission has always been simple: to bring the magic of out-of-home (OOH) media to people who want to express their love in the most beautiful, unforgettable way.
            </p>
          </div>

          {/* Vision Statement */}
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-12 text-[#664e41] text-balance">
            WedFlix is where that vision comes to life.
          </h2>

          <div className="text-center mb-16">
            <p className="text-lg text-[#6d6d6d] leading-relaxed max-w-3xl mx-auto">
              We turn every couple's journey into a story worth sharing — not just with friends and family, but with the whole city. Whether it's a proposal, a wedding day surprise, or a joyful announcement, we help you light up the skyline with your love.
            </p>
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 mt-20">
            <div className="bg-white border border-[#d8dce0] rounded-2xl p-10 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#d0416a]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Star className="w-8 h-8 text-[#d0416a] fill-[#d0416a]" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#1c1c1c]">Our Vision</h3>
              <p className="text-[#6d6d6d] leading-relaxed">
                To become the world's go-to platform where love meets technology — making bold, heartfelt expressions part of everyday celebration.
              </p>
            </div>

            <div className="bg-white border border-[#d8dce0] rounded-2xl p-10 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#d0416a]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-[#d0416a] fill-[#d0416a]" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-[#1c1c1c]">Our Mission</h3>
              <p className="text-[#6d6d6d] leading-relaxed">
                To create a culture where expressing love is not only beautiful, but also accessible, joyful, and effortless for everyone.
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center mt-20">
            <p className="text-lg text-[#6d6d6d] leading-relaxed max-w-3xl mx-auto">
              Whether you're planning your big day or surprising someone you love, WedFlix is here to help you make it larger than life.
            </p>
          </div>
        </div>
      </main>

      {/* Follow Section */}
      <section className="py-12 bg-white border-t border-[#d8dce0]">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-sm text-[#6d6d6d] mb-4">Follow us and keep updated!</p>
            <div className="flex items-center justify-center gap-4">
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-6 h-6 text-[#1c1c1c]" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-6 h-6 text-[#1c1c1c]" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-6 h-6 text-[#1c1c1c]" />
              </Link>
              <Link href="#" className="hover:opacity-80 transition-opacity">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#664e41] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-8 text-xs mb-6">
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
          
          <div className="flex items-center justify-center gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/app-store-badge.svg"
                alt="Download on App Store"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
