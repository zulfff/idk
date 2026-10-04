'use client'

import dynamic from 'next/dynamic'

const ResearchScene = dynamic(() => import('@/components/scene/ResearchScene'), {
  ssr: false,
  loading: () => (
    <div className="scene-stage" role="img" aria-label="3D typography loading">
      <div className="scene-stage__fallback" aria-hidden="true"><strong className="display-3d">Arya</strong></div>
      <span className="scene-stage__label">research instrument / loading</span>
    </div>
  ),
})

export default function ResearchSceneSlot({ label }: { label?: string }) {
  return <ResearchScene label={label} />
}
