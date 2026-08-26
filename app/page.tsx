import Hero from '@/components/Hero'
import HomeOverview from '@/components/HomeOverview'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HomeOverview />
    </div>
  )
}
