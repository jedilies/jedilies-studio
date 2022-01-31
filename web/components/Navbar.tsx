import Link from 'next/Link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href='/'>
        <a className="font-bold mx-4 hover:text-orange-400">Home</a>
      </Link>
      <Link href='/test-type'>
        <a className="font-bold mx-4 hover:text-orange-400">Test-type</a>
      </Link>
    </nav>
  );
}
