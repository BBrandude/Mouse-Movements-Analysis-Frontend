import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script src="https://avantsecure.net/script/IU16LJh7Ofp8z02kWtdQzAMzzngdQx2DfjLOWMAygC0CJGHv0v23c2JTqkxwg7fq/avant2" strategy="beforeInteractive" />
      <Script type='text/javascript' src='/collect.js' strategy="beforeInteractive" />
      <div className='bg-black min-h-screen flex items-center justify-center flex-col'>
        <div className='flex flex-col items-center md:items-start md:flex-row md:space-x-10 lg:space-x-20'>
          <div className='flex flex-col justify-center space-y-5'>
            <h1 className='text-white text-2xl'>Contribute and View Data</h1>
            <Link href="/viewdata">
            <a className='btn' id="submit-data" avant="strict">Click Here</a>
            </Link>
          </div>
          <div className=''>
            <img className='pb-1=20' width={300} height={200} src={'/chalk.png'}></img>
          </div>
        </div>
      </div>
    </>
  )
}
