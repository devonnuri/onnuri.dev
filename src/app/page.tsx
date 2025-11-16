import Logo from '@/app/logo';
import Link from 'next/link';
import ProgressBar from '@/app/components/ProgressBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="bg-white p-8 max-w-xl w-full font-mono rounded border-2 border-gray-200">
        <div className="text-center">
          <div className="mb-2">
            <Logo />
          </div>
          <h1 className="my-1 text-xl font-bold">Huiseong Yang</h1>
          <h2 className="my-1 text-sm">Software Engineer</h2>
          <p className="text-sm text-gray-500">
            <Link
              href="https://wiki.onnuri.dev"
              className="underline"
              target="_blank"
            >
              wiki
            </Link>
            {' | '}
            <Link
              href="https://github.com/devonnuri"
              className="underline"
              target="_blank"
            >
              github
            </Link>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold mb-1">Job Experience</h2>
          <ul className="text-sm">
            <li>
              <Link
                href="https://alephresear.ch/"
                className="underline decoration-dotted underline-offset-2"
                target="_blank"
              >
                Aleph Research
              </Link>
            </li>
            <ul className="ml-4 my-1">
              <li className="flex flex-col-reverse sm:flex-row">
                <span>Core Engineer (Part-time)</span>
                <span className="text-gray-500 ml-0 sm:ml-auto">
                  2024.01-2024.08
                </span>
              </li>
            </ul>
            <li>
              <Link
                href="https://contentstech.com/"
                className="underline decoration-dotted underline-offset-2"
                target="_blank"
              >
                Contents Technologies
              </Link>
            </li>
            <ul className="ml-4 my-1">
              <li className="flex flex-col-reverse sm:flex-row">
                <span>Frontend Engineer (Part-time)</span>
                <span className="text-gray-500 ml-0 sm:ml-auto">
                  2023.04-2024.10
                </span>
              </li>
            </ul>
            <li className="my-1">Republic of Korea Air Force Band</li>
            <ul className="ml-4 my-1">
              <li className="flex flex-col-reverse sm:flex-row">
                <span>Military Musician (Saxophonist)</span>
                <div className="text-gray-500 ml-0 sm:ml-auto sm:text-right">
                  <div>2025.05-2027.02</div>
                  <div className="hidden sm:block">
                    <ProgressBar start="2025.05.19" end="2027.02.18" />
                  </div>
                </div>
              </li>
            </ul>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-1">Education</h2>
          <ul className="text-sm">
            <li className="my-1">
              <Link
                href="https://www.korea.ac.kr/"
                className="underline decoration-dotted underline-offset-2"
                target="_blank"
              >
                Korea University
              </Link>
            </li>
            <ul className="ml-4">
              <li className="flex flex-col-reverse sm:flex-row my-1">
                <span>B.A. of French Language and Literature</span>
                <span className="text-gray-500 ml-0 sm:ml-auto">
                  2023.03-Present
                </span>
              </li>
              <li className="flex flex-col-reverse sm:flex-row my-1">
                <span>B.S. of Computer Science and Engineering</span>
                <span className="text-gray-500 ml-0 sm:ml-auto">
                  2024.09-Present
                </span>
              </li>
            </ul>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-1">Projects</h2>
          <ul className="text-sm">
            <li className="my-1">
              <Link
                href="https://github.com/devonnuri/visalloc"
                className="underline decoration-dotted underline-offset-2"
                target="_blank"
              >
                visalloc
              </Link>
              <div className="text-sm text-gray-500 ml-4">
                Interactive, in-browser visualizer for a ptmalloc-like allocator
                — implemented with TypeScript + React. Intended as a learning
                tool for allocator internals.
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-1">Links</h2>
          <ul className="text-sm">
            <li className="flex items-center justify-between my-1">
              <span>solved.ac</span>
              <Link
                href="https://solved.ac/profile/devonnuri"
                target="_blank"
                className="text-[#00c78b] underline decoration-dotted underline-offset-2"
              >
                devonnuri (1711, Platinum IV)
              </Link>
            </li>
            <li className="flex items-center justify-between my-1">
              <span>Dreamhack</span>
              <Link
                href="https://dreamhack.io/users/2113"
                target="_blank"
                className="underline decoration-dotted underline-offset-2"
              >
                devonnuri
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold mb-1">Contact</h2>
          <p className="text-sm">me (at) onnuri.dev</p>
        </div>
      </div>
    </div>
  );
}
