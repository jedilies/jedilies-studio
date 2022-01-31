import Link from 'next/Link'

export default function Navbar() {
  return (
    <nav>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/test-type'>
        <a>Test-type</a>
      </Link>
    </nav>
  );
}
