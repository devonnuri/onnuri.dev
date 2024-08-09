'use client';

import { animated, useSpring } from '@react-spring/web';

export default function Logo() {
  const hundredToZero = useSpring({
    from: { y: 100 },
    to: { y: 0 },
  });

  const minusHundredToZero = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  });

  return (
    <div className="flex justify-center">
      <svg className="block w-[15rem] fill-black" viewBox="0 0 387.35 102.58">
        <g id="devonnuri">
          <path
            d="M86.56,232.82V209.67a4.61,4.61,0,0,1,9.21,0v41.75a23.29,23.29,0,1,1-9.21-18.6Zm0,18.6v-.09a14.19,14.19,0,1,0,0,.09Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M147.85,251.61a4.59,4.59,0,0,1-4.65,4.56H111.11a14.19,14.19,0,0,0,13.4,9.58,18.25,18.25,0,0,0,10.41-3.07c2.14-1.4,5-.1,6.14,2.14s-.09,4.74-2.23,6.13a22.72,22.72,0,0,1-14.32,4,23.34,23.34,0,1,1,0-46.68C135.76,228.27,147.85,236.45,147.85,251.61ZM111.11,247H138c-2-6.51-7.9-9.49-13.48-9.49A14.24,14.24,0,0,0,111.11,247Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M186.72,234.68l-13.95,37.2A4.79,4.79,0,0,1,168.4,275h-.09a4.73,4.73,0,0,1-4.37-3.07L150,234.68a4.62,4.62,0,1,1,8.64-3.25l9.77,25.95,9.67-25.95a4.62,4.62,0,0,1,8.65,3.25Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M188.58,251.61A23.35,23.35,0,1,1,211.93,275,23.36,23.36,0,0,1,188.58,251.61Zm9.21,0a14.14,14.14,0,1,0,14.14-14.14A14.19,14.19,0,0,0,197.79,251.61Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M287.44,251.61V270.3a4.61,4.61,0,1,1-9.21,0V251.61a14.14,14.14,0,1,0-28.27,0V270.3a4.61,4.61,0,1,1-9.21,0V251.61a23.35,23.35,0,0,1,46.69,0Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M339.61,251.61V270.3a4.61,4.61,0,1,1-9.21,0V251.61a14.14,14.14,0,1,0-28.27,0V270.3a4.61,4.61,0,1,1-9.21,0V251.61a23.35,23.35,0,0,1,46.69,0Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M382.57,232.92v23.43a18.83,18.83,0,0,1-37.66,0V232.92a4.61,4.61,0,0,1,9.21,0v23.25a9.63,9.63,0,1,0,19.25,0V232.92a4.6,4.6,0,0,1,9.2,0Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M415.87,232.92a4.67,4.67,0,0,1-4.65,4.65,14.13,14.13,0,0,0-14.14,14.13v18.7a4.61,4.61,0,1,1-9.21,0V251.7a23.36,23.36,0,0,1,23.35-23.34A4.58,4.58,0,0,1,415.87,232.92Z"
            transform="translate(-49.08 -199.52)"
          />
          <path
            d="M421.44,270.4V232.92a4.61,4.61,0,0,1,9.21,0V270.4a4.61,4.61,0,1,1-9.21,0Z"
            transform="translate(-49.08 -199.52)"
          />
        </g>
        <animated.g style={{ isolation: 'isolate', ...hundredToZero }}>
          <path
            fillRule="evenodd"
            d="M204.84,247.2A2.76,2.76,0,1,0,207.6,250,2.77,2.77,0,0,0,204.84,247.2Z"
            transform="translate(-49.08 -199.52)"
          />
        </animated.g>
        <animated.g style={{ isolation: 'isolate', ...hundredToZero }}>
          <circle cx="169.68" cy="54.52" r="2.76" />
        </animated.g>
        <animated.g style={{ isolation: 'isolate', ...minusHundredToZero }}>
          <path
            fillRule="evenodd"
            d="M424.84,218.91s-8-1.81.72-11.52,8.37-8.36,8.4-6.72-1.56,14.1-4.08,16.32A6.93,6.93,0,0,1,424.84,218.91Z"
            transform="translate(-49.08 -199.52)"
          />
        </animated.g>
      </svg>
    </div>
  );
}
