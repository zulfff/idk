export default function PersonaBackground({ src = '/persona/main2.optimized.mp4' }: { src?: string }) {
  return (
    <div className="persona-bg" aria-hidden="true">
      <video src={src} autoPlay loop muted playsInline />
      <div className="persona-bg__veil" />
      <div className="persona-bg__scanlines" />
      <i className="persona-bg__stripe" />
    </div>
  )
}
