import Image from "next/image";
import MagiaDoJSX from '@/components/MagiaDoJSX'
import Link from 'next/link'




export default function Home() {
  return (
  <div>
    <h2>Interfaces Modernos</h2>
    <p>Welcome</p>
    <MagiaDoJSX />
    <Link href="/counter">Counter</Link>
  </div>
  

  );
}
