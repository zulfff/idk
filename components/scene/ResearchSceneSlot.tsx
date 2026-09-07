'use client'

import dynamic from 'next/dynamic'

const ResearchScene = dynamic(() => import('@/components/scene/ResearchScene'), {
  ssr: false,
  loading: () => (
    <div className="scene-stage" role="img" aria-label="Orbital research lattice — loading">
      <div className="scene-stage__fallback" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="scene-stage__label">orbital research lattice / est. 2023</span>
    </div>
  ),
})

export default function ResearchSceneSlot() {
  return <ResearchScene />
}
