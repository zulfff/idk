import Hero from '@/components/sections/Hero'
import HomeOverview from '@/components/sections/HomeOverview'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HomeOverview />
    </div>
  )
}
