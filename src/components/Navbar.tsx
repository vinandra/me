import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { TbBrandTwitterFilled } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>vinandra</h1>
      <div className='flex'>
        <div className='relative w-32 h-32'>
          <Image
            src='/profile.jpeg'
            alt='profile'
            fill
            className='object-cover'
          />
        </div>
        <ul>
          <li>
            <FaGithubAlt />
          </li>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <TbBrandTwitterFilled />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
      </div>
    </div>
  );
}
