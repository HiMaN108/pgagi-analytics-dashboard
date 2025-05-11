'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/dashboard')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white px-4">
      <Card className="w-full max-w-md shadow-2xl border border-purple-700">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold">
            Welcome 🚀
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-lg">
            Hold tight! Taking you to your dashboard...
          </p>
          <div className="flex justify-center items-center space-x-2">
            <Loader2 className="h-6 w-6 animate-spin text-purple-400" />
            <span className="text-sm italic text-gray-300">Redirecting in 3 seconds</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="ghost" className="text-purple-300 hover:underline" onClick={() => router.push('/dashboard')}>
            Or click here to go manually →
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
