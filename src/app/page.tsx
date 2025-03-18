import Logo from '@/app/logo';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Home() {
  // TODO: remove this
  redirect('https://wiki.onnuri.dev');

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
                  2023.04-Present
                </span>
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
          <h2 className="font-bold mb-1">Contact</h2>
          <p className="text-sm">me (at) onnuri.dev</p>
        </div>
      </div>
    </div>
  );
}
