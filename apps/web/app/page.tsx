'use client';
import { OrbitPath, OrbitItem } from 'react-orbit-component';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { Props } from 'useful-react-types';
const SHARED_CLASSNAME = 'w-10 h-10 bg-zinc-800 border-white/20 border-2 rounded-full flex items-center justify-center text-lg';
const OrbitItemFreezeOnMouseOver = ({ children, radius }: Props.ForceChildren & { radius?: number }) => {
  const [isFreeze, setIsFreeze] = React.useState(false);
  return (
    <OrbitItem
      className="w-10 h-10 bg-zinc-800 border-white/20 border-2 rounded-full flex items-center justify-center text-lg cursor-pointer hover:scale-110"
      radius={radius}
      config={{
        direction: 'clockwise',
        startAngle: 120,
        speed: isFreeze ? 0 : 0.01
      }}
      style={{
        transition: 'transform 0.1s ease-in-out',
      }}
      onMouseOver={(e: any) => {
        setIsFreeze(true);
      }}
      onMouseOut={(e: any) => {
        setIsFreeze(false);
      }}
    >
      {children}
    </OrbitItem>
  );
};
export default function Page(): JSX.Element {
  return (
    <main>
      <div className="flex items-center justify-center min-h-screen">
        <OrbitPath type="circle" className="absolute w-[10rem] h-[10rem] bg-transparent rounded-full border-2 border-white/10">
          <OrbitItemFreezeOnMouseOver>🐒</OrbitItemFreezeOnMouseOver>
        </OrbitPath>

        <OrbitPath
          type="circle"
          className="absolute md:w-[20rem] md:h-[20rem] w-[15rem] h-[15rem] bg-transparent rounded-full border-2 border-white/10"
        >
          <OrbitItem
            config={{
              direction: 'clockwise',
              startAngle: 120,
              speed: 0.01,
            }}
            className={SHARED_CLASSNAME}
          >
            😀
          </OrbitItem>

          <OrbitItem
            config={{
              direction: 'clockwise',
              startAngle: 240,
              speed: 0.01,
            }}
            className={SHARED_CLASSNAME}
          >
            🐒
          </OrbitItem>

          <OrbitItem
            config={{
              direction: 'clockwise',
              startAngle: 0,
              speed: 0.01,
            }}
            className={SHARED_CLASSNAME}
          >
            🪐
          </OrbitItem>
        </OrbitPath>

        <OrbitPath
          type="circle"
          className="absolute md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem] bg-transparent rounded-full border-2 border-white/10"
        >
          <OrbitItem
            config={{
              direction: 'clockwise',
              startAngle: 240,
              speed: 0.02,
            }}
            className={SHARED_CLASSNAME}
          >
            🚀
          </OrbitItem>
        </OrbitPath>

        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="logo"
            width={100}
            height={100}
            className="absolute inset-0 m-auto w-20 h-20"
          />
          <div className="w-36 h-36 bg-cyan-400/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </main>
  );
}
