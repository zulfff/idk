'use client'

import dynamic from 'next/dynamic'

const ResearchScene = dynamic(() => import('@/components/ResearchScene'), {
  ssr: false,
  loading: () => (
    <figure className="research-scene" role="img" aria-label="Wireframe research lattice">
      <div className="research-scene__fallback" aria-hidden="true"><span /><span /><span /></div>
      <figcaption className="research-scene__label">research lattice / 03—25</figcaption>
    </figure>
  ),
})

export default function ResearchSceneSlot() {
  return <ResearchScene />
}
