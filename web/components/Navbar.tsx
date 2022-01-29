import Link from 'next/Link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href='/'>
        <a className="font-bold mx-4">Home</a>
      </Link>
      <Link href='/test'>
        <a className="font-bold mx-4">Test</a>
      </Link>
    </nav>
  );
}
