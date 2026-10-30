"use client";

import dynamic from "next/dynamic";

const MonolithScene = dynamic(() => import("./monolith-scene"), {
  ssr: false,
  loading: () => <div className="scene-fallback"><div className="monolith" aria-hidden="true" /><span className="mono">Loading monolith</span></div>,
});

export default function MonolithLoader() {
  return <MonolithScene />;
}
