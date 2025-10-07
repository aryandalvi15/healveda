'use client';
import React from 'react';
import GradientText from '../components/GradientText';
import Hyperspeed from '@/components/HyperSpeed';

const Branding = () => {
  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      {/* Hyperspeed background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 0.5,  // slower for background
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x0a0a0a,
              islandColor: 0x151515,
              background: 0x000000,
              shoulderLines: 0x3A9D80,
              brokenLines: 0x355C9C,
              leftCars: [0x2E8B57, 0x3A9D80, 0x50C878],
              rightCars: [0x2C3E70, 0x355C9C, 0x4A6FA5],
              sticks: 0x3A9D80,
            }
          }}
          className="h-full w-full"
        />
      </div>

      {/* Foreground text */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-2 space-y-1">
        {/* Main text line */}
        <div className="flex flex-wrap justify-center items-center gap-x-1 gap-y-0 sm:gap-x-2 sm:gap-y-0">
          {[
            "Transform",
            "Your",
            "Health",
            "To",
            "Next",
            "Level",
          ].map((word, index) => (
            <span
              key={index}
              className="font-bold text-gray-300 hover:text-emerald-300 transition-colors duration-300 text-2xl sm:text-6xl md:text-8xl leading-tight px-2.5"
            >
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={10}
                showBorder={false}
                className="inline-block"
              >
                {word}
              </GradientText>
            </span>
          ))}
        </div>
        
        {/* HealVeda text */}
        <div className="flex justify-center">
          <span className=" text-2xl sm:text-6xl md:text-8xl leading-tight py-6 px-10">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={10}
              showBorder={false}
              className="inline-block"
            >
               Through   HealVeda
            </GradientText>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Branding;