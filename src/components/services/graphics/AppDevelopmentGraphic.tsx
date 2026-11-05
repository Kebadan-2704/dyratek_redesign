'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function AppDevelopmentGraphic() {
  const [platform, setPlatform] = useState<'android' | 'ios'>('android');
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildProgress, setBuildProgress] = useState(100);
  const [buildStep, setBuildStep] = useState('Build complete • Ready to distribute');
  const [buildCount, setBuildCount] = useState(482);
  const [installedNotification, setInstalledNotification] = useState(true);

  const triggerBuild = () => {
    if (isBuilding) return;
    setIsBuilding(true);
    setBuildProgress(15);
    setBuildStep('Compiling Kotlin & Native C++ sources...');
    setInstalledNotification(false);

    setTimeout(() => {
      setBuildProgress(45);
      setBuildStep('Optimizing DEX bytecode with R8 shrinker...');
    }, 450);

    setTimeout(() => {
      setBuildProgress(75);
      setBuildStep('Signing APK with production v2/v3 keystore...');
    }, 900);

    setTimeout(() => {
      setBuildProgress(100);
      setBuildStep('Artifact packaged: app-release-v2.4.apk (24.8 MB)');
      setIsBuilding(false);
      setBuildCount((c) => c + 1);
      setInstalledNotification(true);
    }, 1400);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      // settled
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-[500px] select-none rounded-2xl bg-gradient-to-b from-[#0D1F1A] via-[#091713] to-[#050D0B] border-2 border-emerald-500/50 p-4 sm:p-5 shadow-2xl shadow-emerald-950/50 text-white space-y-4 relative overflow-hidden">
      {/* Background glowing multi-color aura */}
      <div
        className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-purple-500/15 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Bar: Platform Switcher & CI/CD Status */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-500/30 text-xs relative z-10">
        <div className="flex items-center gap-1.5 bg-[#081511] p-1 rounded-xl border border-emerald-500/30">
          <button
            type="button"
            onClick={() => setPlatform('android')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              platform === 'android'
                ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/30'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            🤖 Android (.apk)
          </button>
          <button
            type="button"
            onClick={() => setPlatform('ios')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              platform === 'ios'
                ? 'bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 text-white shadow-md shadow-purple-500/30'
                : 'text-[#A3B8B0] hover:text-white'
            }`}
          >
            🍎 iOS (.ipa)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/90 border border-emerald-400/40 text-[11px] font-mono text-emerald-300 font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            CI/CD Ready
          </span>
        </div>
      </div>

      {/* Main Grid: APK Build Console (Left) + Phone Screen Mockup (Right) */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center relative z-10">
        {/* APK Build Console */}
        <div className="sm:col-span-7 space-y-2.5">
          <div className="rounded-xl bg-[#06100D] border border-emerald-500/40 p-3 font-mono text-[11px] space-y-2 shadow-inner">
            <div className="flex items-center justify-between text-[10px] text-cyan-300 border-b border-emerald-500/20 pb-1.5 font-bold">
              <span>gradlew assembleRelease</span>
              <span className="text-amber-300">Build #{buildCount}</span>
            </div>

            <div className="space-y-1">
              <div className="text-cyan-300 font-bold flex items-center gap-1 text-[11px]">
                <span className="text-emerald-400">$</span>
                <span>./gradlew {platform === 'android' ? 'assembleRelease' : 'build-ipa'}</span>
              </div>
              <div className="text-[10px] truncate">
                {isBuilding ? (
                  <span className="text-amber-300 font-bold animate-pulse">{buildStep}</span>
                ) : (
                  <span className="text-emerald-400 font-semibold">✓ 100% Native Bytecode Compiled</span>
                )}
              </div>
              <div className="text-[10px] text-purple-300 truncate">
                Keystore: SHA-256 verified [v2/v3]
              </div>
            </div>

            {/* Vibrant Multi-Color Animated Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-[10px] text-[#A3B8B0]">
                <span className="text-white font-medium">{platform === 'android' ? 'APK Packaging' : 'IPA Packaging'}</span>
                <span className="text-emerald-400 font-bold font-mono">{buildProgress}%</span>
              </div>
              <div className="h-2 w-full bg-[#0D241C] rounded-full overflow-hidden border border-emerald-500/30">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-400 via-cyan-400 via-indigo-500 to-fuchsia-500 rounded-full animate-gradient"
                  style={{ width: `${buildProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <div className="pt-1 flex items-center justify-between text-[10px] border-t border-emerald-500/20">
              <span className="text-emerald-300 font-bold">
                {platform === 'android' ? 'app-release-v2.4.apk' : 'dyratek-app.ipa'}
              </span>
              <span className="text-cyan-300 font-mono font-bold">24.8 MB</span>
            </div>
          </div>

          {/* Interactive Trigger Button with Vibrant Gradient */}
          <button
            type="button"
            disabled={isBuilding}
            onClick={triggerBuild}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 active:scale-[0.98] border border-emerald-300/40 text-xs font-bold text-white transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-emerald-500/25"
          >
            {isBuilding ? (
              <>
                <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Building {platform === 'android' ? 'APK Package...' : 'IPA Package...'}</span>
              </>
            ) : (
              <>
                <span className="text-amber-300">⚡</span>
                <span>Simulate {platform === 'android' ? 'APK Build' : 'IPA Build'}</span>
              </>
            )}
          </button>
        </div>

        {/* Live Phone Mockup Preview */}
        <div className="sm:col-span-5 flex justify-center">
          <div className="relative w-38 h-68 rounded-[24px] bg-[#050D0B] border-2 border-emerald-400/80 p-1.5 shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-[#0D241C] rounded-full z-20 border border-emerald-500/30" />

            {/* Mobile Screen Content with Vibrant Wallpaper */}
            <div className="w-full h-full rounded-[20px] bg-gradient-to-b from-[#0F2820] via-[#091D17] to-[#040C09] p-2 pt-4 flex flex-col justify-between relative overflow-hidden text-[9px]">
              {/* Status Bar */}
              <div className="flex justify-between items-center text-[8px] text-emerald-300 px-1 pt-1 font-mono font-bold">
                <span>9:41</span>
                <span>5G 100%</span>
              </div>

              {/* Colorful App UI Sample */}
              <div className="space-y-1.5 py-1">
                <div className="p-2 rounded-lg bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 backdrop-blur-md border border-emerald-400/30 space-y-0.5">
                  <div className="text-[10px] font-bold text-white leading-tight">DYRATEK Mobile</div>
                  <div className="text-[8px] text-cyan-300 font-mono">v2.4.0 Production</div>
                </div>

                {/* Quick Action Tiles */}
                <div className="grid grid-cols-2 gap-1 text-[8px]">
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-indigo-900/60 to-purple-900/50 border border-indigo-500/30 text-center">
                    <div className="text-indigo-300">Latency</div>
                    <div className="font-bold text-white text-[9px]">16ms</div>
                  </div>
                  <div className="p-1.5 rounded-lg bg-gradient-to-br from-cyan-900/60 to-emerald-900/50 border border-cyan-500/30 text-center">
                    <div className="text-cyan-300">Offline</div>
                    <div className="font-bold text-white text-[9px]">Ready</div>
                  </div>
                </div>
              </div>

              {/* Push Notification Overlay with Neon Border */}
              <AnimatePresence>
                {installedNotification && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 rounded-xl bg-gradient-to-r from-emerald-950 via-teal-950 to-cyan-950 border-2 border-emerald-400 text-[8px] space-y-0.5 shadow-xl shadow-emerald-500/30"
                  >
                    <div className="flex items-center gap-1 font-bold text-emerald-300">
                      <span>✓</span>
                      <span>{platform === 'android' ? 'APK Installed' : 'IPA Installed'}</span>
                    </div>
                    <div className="text-[7.5px] text-emerald-100/90 leading-tight">
                      Ready for Play Store & App Store test track.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Nav Bar */}
              <div className="flex justify-around items-center pt-1 border-t border-emerald-500/20 text-[9px] text-[#A3B8B0]">
                <span className="text-emerald-400 font-bold">●</span>
                <span className="text-cyan-400 font-bold">■</span>
                <span className="text-purple-400 font-bold">▲</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Strip with 3 Colorful Badges */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-emerald-500/30 text-center text-[10px] relative z-10">
        <div className="p-2 rounded-xl bg-gradient-to-b from-blue-950/60 to-blue-900/40 border border-blue-500/40">
          <div className="text-blue-300 font-medium">Native Bridge</div>
          <div className="font-bold text-white text-xs">Zero Overhead</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-emerald-950/60 to-emerald-900/40 border border-emerald-500/40">
          <div className="text-emerald-300 font-medium">Target Devices</div>
          <div className="font-bold text-white text-xs">iOS 18 + Android 15</div>
        </div>
        <div className="p-2 rounded-xl bg-gradient-to-b from-amber-950/60 to-amber-900/40 border border-amber-500/40">
          <div className="text-amber-300 font-medium">Store Ready</div>
          <div className="font-bold text-white text-xs">APK & AAB & IPA</div>
        </div>
      </div>
    </div>
  );
}
