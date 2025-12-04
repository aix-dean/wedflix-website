"use client"

import { Button } from '@/components/ui/button'
import { Menu, Facebook, Instagram, Twitter, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { El_Messiri } from 'next/font/google'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { useDownloadCount } from '@/hooks/useDownloadCount'

const elMessiri = El_Messiri({ subsets: ['latin'] })

export default function PartnerPage() {
  const { count, loading, error, increment } = useDownloadCount()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center text-[#6d6d6d] hover:text-[#1c1c1c]">
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center">
          <h1 className={`text-center text-[#664e41] text-[40px] font-semibold leading-none ${elMessiri.className} mb-16`}>
            Download the WedFlix App Now!
          </h1>
          <p className="text-lg text-[#6d6d6d] mb-16">
            Creating lasting memories now. &lt;3
          </p>

          {/* Download Section */}
          <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto mb-20">
            {/* Google Play */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/google-play.png"
                  alt="Google Play"
                  width={32}
                  height={32}
                />
                <span className="font-semibold text-[#1c1c1c]">Google Play</span>
              </div>
              <div className="bg-white border-2 border-[#d8dce0] rounded-lg p-2 mb-4 w-48 h-48 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <Image
                    src="/wedflix-playstore-qr.png"
                    alt="Google Play QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <Link href="https://play.google.com/store/apps/details?id=com.aix.wedflix&pcampaignid=web_share" onClick={() => increment()} className="text-[#d0416a] font-medium hover:underline">
                Download
              </Link>
              {/* <div className="flex flex-col items-center gap-2 mt-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span className="text-sm font-medium text-muted-foreground">Total Downloads</span>
                </div>
                <span className="inline-flex items-center justify-center rounded-md border w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 px-4 py-2 text-lg font-bold">
                  {loading ? 'Loading...' : error ? `Error: ${error}` : count}
                </span>
              </div> */}
            </div>

            {/* App Store */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#555"/>
                </svg>
                <span className="font-semibold text-[#1c1c1c]">App Store</span>
              </div>
              <div className="bg-white border-2 border-[#d8dce0] rounded-lg p-6 mb-4 w-48 h-48 flex items-center justify-center">
                <span className="text-center text-[#6d6d6d]">Coming Soon</span>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-12">
            <p className="text-[#664e41] mb-6">Follow us and keep updated!</p>
            <div className="flex items-center justify-center gap-6">
              <Link href="https://www.facebook.com/profile.php?id=61583122208188" target="_blank" className="hover:opacity-70 transition-opacity">
                <Facebook className="w-8 h-8 text-[#1c1c1c]" fill="currentColor" />
              </Link>
              <Instagram className="w-8 h-8 text-[#1c1c1c]" />
              <Twitter className="w-8 h-8 text-[#1c1c1c]" fill="currentColor" />
              <svg className="w-8 h-8 text-[#1c1c1c]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#664e41] text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-sm">
              <Link href="#" className="hover:underline">
                Terms and Policies
              </Link>
              <span>·</span>
              <Link href="#" className="hover:underline">
                Privacy Notice
              </Link>
            </div>
            
            <span className="text-sm">© WedFlix.ph</span>
            
            <div className="flex items-center gap-3">
              <button onClick={() => setIsDialogOpen(true)} className="hover:opacity-80 transition-opacity">
                <Image
                  src="/google-play-badge.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={36}
                />
              </button>
              <button onClick={() => setIsDialogOpen(true)} className="hover:opacity-80 transition-opacity">
                <Image
                  src="/app-store-badge.png"
                  alt="Download on App Store"
                  width={120}
                  height={36}
                />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Coming Soon</DialogTitle>
            <DialogDescription>
              This feature is coming soon. Stay tuned!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
