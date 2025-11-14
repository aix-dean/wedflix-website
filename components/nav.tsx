'use client'

import { Button } from '@/components/ui/button'
import { Menu, Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export default function Nav() {
  const [showComingSoon, setShowComingSoon] = useState(false)

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-50 border-b border-[#d8dce0]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/">
              <Image
                src="/wedflix-logo.png"
                alt="WedFlix"
                width={60}
                height={10}
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              className="text-[#6d6d6d] hover:text-[#1c1c1c] text-sm p-0 h-auto"
              onClick={() => setShowComingSoon(true)}
            >
              Be Our Partner
            </Button>
            <Link href="/about" className="text-[#6d6d6d] hover:text-[#1c1c1c] text-sm">
              About Us
            </Link>
          </div>
        </div>
      </nav>

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
    </>
  )
}