import Link from 'next/Link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/test/test-type'>
            <a>Test-type</a>
          </Link>
        </li>
        <li>
          <Link href='/test/test-sanity'>
            <a>Test-Sanity</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
