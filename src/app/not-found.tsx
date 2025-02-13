import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <h1 className='font-bold text-9xl'>404</h1>
      <h3 className='text-base'>Halaman tidak ditemukan.</h3>
      <Link href='/'>
        <p className='text-xs'>Kembali kehalaman utama</p>
      </Link>
    </div>
  );
}
