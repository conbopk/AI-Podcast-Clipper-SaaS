import {ArrowRight, CheckCircle, Clock, Download, Play, Scissors, Share2, Sparkles, Upload, Video, Zap} from "lucide-react";
import Link from "next/link";
import {Button} from "~/components/ui/button";
import {Badge} from "~/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/*Navigation*/}
      <nav className='relative z-50 bg-black/20 backdrop-blur-sm border-b border-white/10'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg'>
                <Scissors className='h-6 w-6 text-white' />
              </div>
              <div className='font-sans text-xl font-medium tracking-tight'>
                <span className='text-white'>podcast</span>
                <span className='font-light text-purple-300'>/</span>
                <span className='text-white font-light'>clipper</span>
              </div>
            </div>

            <div className='flex items-center space-x-4'>
              <Link href="/login">
                <Button variant='ghost' className='text-white hover:bg-white/10'>
                  Sign In
                </Button>
              </Link>
              <Link href='/signup'>
                <Button className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0'>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/*Hero Section*/}
      <section className='relative py-20 px-4'>
        <div className='container mx-auto text-center'>
          <div className='mx-auto max-w-4xl'>
            <Badge
                variant='outline'
                className='mb-6 border-purple-300/30 bg-purple-900/20 text-purple-200 backdrop-blur-sm'
            >
              <Sparkles className='mr-2 h-4 w-4' />
              AI-Powered Podcast Clips
            </Badge>

            <h1 className='mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl'>
              Transform Your{" "}
              <span className='bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
                Podcasts
              </span>{" "}
              Into Viral Clips
            </h1>

            <p className='mx-auto mb-8 max-w-2xl text-xl text-slate-300'>
              Upload your podcast episodes and let our AI automatically generate
              engaging, shareable clips that capture your best moments.
              Perfect for social media, marketing, and audience growth.
            </p>

            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
              <Link href='/signup'>
                <Button
                  size='lg'
                  className='bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 px-8 py-6 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25'
                >
                  Start Creating Clips
                </Button>
              </Link>
              <Link href='/login'>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg'
                >
                  <Play className='mr-2 h-5 w-5' />
                  Watch Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/*Gradient Orbs*/}
        <div className='absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500/30 blur-3xl' />
        <div className='absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-pink-500/30 blur-3xl' />
      </section>

      {/*Feature Section*/}
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-white sm:text-4xl mb-4'>
              Everything You Need to Create Viral Content
            </h2>
            <p className='text-slate-300 text-lg max-w-2xl mx-auto'>
              Our AI analyzes your entire podcast to find the most engaging moments
              and creates professional clips automatically.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20'>
                  <Upload className='h-6 w-6 text-purple-400' />
                </div>
                <CardTitle className='text-white'>Easy Upload</CardTitle>
                <CardDescription className='text-slate-300'>
                  Simply drag and drop your MP4 files. We support files up to 500MB.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/20'>
                  <Zap className='h-6 w-6 text-pink-400' />
                </div>
                <CardTitle className='text-white'>AI-Powered Analysis</CardTitle>
                <CardDescription className='text-slate-300'>
                  Our advanced AI identifies the most engaging moments in your content.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20'>
                  <Scissors className='h-6 w-6 text-blue-400' />
                </div>
                <CardTitle className='text-white'>Auto Clip Generation</CardTitle>
                <CardDescription className='text-slate-300'>
                  Get multiple professionally edited clips ready for social media.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20'>
                  <Clock className='h-6 w-6 text-green-400' />
                </div>
                <CardTitle className='text-white'>Fast Processing</CardTitle>
                <CardDescription className='text-slate-300'>
                  Get your clips in minutes, not hours. Perfect for timely content.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20'>
                  <Download className='h-6 w-6 text-orange-400' />
                </div>
                <CardTitle className='text-white'>High Quality Export</CardTitle>
                <CardDescription className='text-slate-300'>
                  Download clips in high resolution, optimized for each platform.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className='bg-white/5 border-white/10 backdrop-blur-sm'>
              <CardHeader>
                <div className='mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20'>
                  <Share2 className='h-6 w-6 text-red-400' />
                </div>
                <CardTitle className='text-white'>Social Ready</CardTitle>
                <CardDescription className='text-slate-300'>
                  Clips are formatted perfectly for Instagram, TikTok, YouTube Shorts.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/*How It Works*/}
      <section className='py-20 px-4 bg-black/20'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-white sm:text-4xl mb-4'>
              How It Works
            </h2>
            <p className='text-slate-300 text-lg'>
              From upload to viral clip in just 3 simple steps
            </p>
          </div>

          <div className='grid grid-cols-1 gap-12 lg:grid-flow-col-3'>
            <div className='text-center'>
              <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500'>
                <Video  className='h-8 w-8 text-white'/>
              </div>
              <h3 className='mb-4 text-xl font-semibold text-white'>1. Upload Your Podcast</h3>
              <p className='text-slate-300'>
                Drag and drop your video file. We support MP4 format up to 500MB.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500'>
                <Sparkles className='h-8 w-8 text-white'/>
              </div>
              <h3 className='mb-4 text-xl font-semibold text-white'>2. AI Analysis</h3>
              <p className='text-slate-300'>
                Our AI analyzes your content and identifies the most engaging moments.
              </p>
            </div>

            <div className='text-center'>
              <div className='mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500'>
                <Download className='h-8 w-8 text-white'/>
              </div>
              <h3 className='mb-4 text-xl font-semibold text-white'>3. Download & Share</h3>
              <p className='text-slate-300'>
                Get your professionally edited clips ready to share on social media.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Pricing Preview*/}
      <section className='py-20 px-4'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold text-white sm:text-4xl mb-4'>
              Simple, Credit-Based Pricing
            </h2>
            <p className='text-slate-300 text-lg'>
              Pay only for what you see. No monthly subscriptions.
            </p>
          </div>

          <div className='max-w-lg mx-auto'>
            <Card className='bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-300/30 backdrop-blur-sm'>
              <CardHeader className='text-center'>
                <CardTitle className='text-2xl text-white'>Credit System</CardTitle>
                <CardDescription className='text-slate-300'>
                  1 credit = 1 processed video with multiple clips generated
                </CardDescription>
              </CardHeader>
              <CardContent className='text-center'>
                <div className='mb-6'>
                  <div className='text-4xl font-bold text-white mb-2'>Flexible</div>
                  <div className='text-slate-300'>Buy credits as you need them</div>
                </div>

                <ul className='space-y-3 mb-8 text-left'>
                  <li className='flex items-center text-slate-300'>
                    <CheckCircle className='mr-3 h-5 w-5 text-green-400' />
                    Multiple clips per video
                  </li>
                  <li className='flex items-center text-slate-300'>
                    <CheckCircle className='mr-3 h-5 w-5 text-green-400' />
                    High-quality output
                  </li>
                  <li className='flex items-center text-slate-300'>
                    <CheckCircle className='mr-3 h-5 w-5 text-green-400' />
                    Fast processing
                  </li>
                  <li className='flex items-center text-slate-300'>
                    <CheckCircle className='mr-3 h-5 w-5 text-green-400' />
                    No expiration
                  </li>
                </ul>

                <Link href='/signup'>
                  <Button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0'>
                    Start Creating Clips
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*CTA Section*/}
      <section className='py-20 px-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold text-white sm:text-4xl mb-4'>
            Ready to Go Viral?
          </h2>
          <p className='text-slate-300 text-lg mb-8 max-w-2xl mx-auto'>
            Join content creators who are already using AI to grow their audience
            and create engaging podcast clips.
          </p>

          <div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link href='/signup'>
              <Button
                size='lg'
                className='bg-white text-purple-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold'
              >
                Get Started Free
                <ArrowRight className='ml-2 h-5 w-5' />
              </Button>
            </Link>
            <Link href='/login'>
              <Button
                size='lg'
                variant='outline'
                className='border-white/20 bg-transparent text-white hover:bg-white/10 px-8 py-6 text-lg'
              >
                Already have an account?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <footer className='py-12 px-4 bg-black/40'>
        <div className='container mx-auto'>
          <div className='flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0'>
            <div className='flex items-center space-x-2'>
              <div className='bg-gradient-to-r from-purple-500 to-pink-500 p-1.5 rounded-md'>
                <Scissors className='h-4 w-4 text-white' />
              </div>
              <div className='font-sans text-lg font-medium tracking-tight'>
                <span className='text-white'>podcast</span>
                <span className='font-light text-purple-300'>/</span>
                <span className='text-white font-light'>clipper</span>
              </div>
            </div>

            <div className='text-slate-400 text-sm'>
              &copy; 2025 Podcast Clipper. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
