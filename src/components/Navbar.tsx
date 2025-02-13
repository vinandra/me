import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className='grid grid-cols-3 place-items-center gap-4'>
      <h1 className='font-bold text-2xl col-span-3'>vinandra</h1>
      <div className=' col-span-1 relative w-24 h-24 rounded-full overflow-hidden'>
        <Image src='/profile.png' alt='profile' fill className='object-cover' />
      </div>
      <div className='col-span-2'>
        <ul className='flex gap-4'>
          <a href='https://github.com/vinandra' target='_blank'>
            <li className='flex items-center justify-center w-11 h-11 p-2 bg-tabs rounded-full box-border'>
              <FaGithubAlt size={28} />
            </li>
          </a>
          <a
            href='https://www.instagram.com/stories/vinandrf_/'
            target='_blank'
          >
            <li className='flex items-center justify-center w-11 h-11 p-2 bg-tabs rounded-full box-border'>
              <AiFillInstagram size={28} />
            </li>
          </a>
          <a href='https://x.com/Auahgelapppppp_' target='_blank'>
            <li className='flex items-center justify-center w-11 h-11 p-2 bg-tabs rounded-full box-border'>
              <TbBrandTwitterFilled size={28} />
            </li>
          </a>
          <a href='https://www.linkedin.com/in/vinandra207/' target='_blank'>
            <li className='flex items-center justify-center w-11 h-11 p-2 bg-tabs rounded-full box-border'>
              <FaLinkedin size={28} />
            </li>
          </a>
        </ul>
      </div>
      <div className='col-span-3 box-border text-center'>
        <p>
          Mahasiswa Teknik Informatika <a href=''>UDINUS</a>. Frontend Engineer.
          Saya tertarik dengan <a href=''>TypeScript</a> setidaknya lebih dari 2
          tahun.
        </p>
      </div>
      <div className='col-span-3'>
        <a href=''>Sapa saya!</a>
      </div>
    </div>
  );
}
