import Logo from '@/app/logo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
      <div className="bg-white p-8 max-w-xl w-full font-mono rounded border-2 border-gray-200">
        <div className="text-center">
          <Logo />
          <h1 className="mt-2 text-xl font-bold">Huiseong Yang</h1>
          <h2 className="text-sm">Software Engineer</h2>
          <p className="text-sm text-gray-500">
            <a
              href="https://wiki.onnuri.dev"
              className="underline"
              target="_blank"
            >
              wiki
            </a>
            {' | '}
            <a
              href="https://github.com/devonnuri"
              className="underline"
              target="_blank"
            >
              github
            </a>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="font-bold">Job Experience</h2>
          <ul className="text-sm">
            <li>Aleph Research</li>
            <ul className="ml-4">
              <li className="flex">
                <span>Core Engineer (Part-time)</span>
                <span className="text-gray-500 ml-auto">2024.01-2024.08</span>
              </li>
            </ul>
            <li>Contents Technologies</li>
            <ul className="ml-4">
              <li className="flex">
                <span>Frontend Engineer (Part-time)</span>
                <span className="text-gray-500 ml-auto">2023.04-Present</span>
              </li>
            </ul>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">Education</h2>
          <ul className="text-sm">
            <li>Korea University</li>
            <ul className="ml-4">
              <li className="flex">
                <span>B.A. of French Language and Literature</span>
                <span className="text-gray-500 ml-auto">2023.03-Present</span>
              </li>
              <li className="flex">
                <span>B.S. of Computer Science and Engineering</span>
                <span className="text-gray-500 ml-auto">2024.09-Present</span>
              </li>
            </ul>
          </ul>
        </div>
        <div className="mt-4">
          <h2 className="font-bold">Contact</h2>
          <p className="text-sm">me (at) onnuri.dev</p>
        </div>
      </div>
    </div>
  );
}
