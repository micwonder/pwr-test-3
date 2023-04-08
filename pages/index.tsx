import { WelcomeHero } from '@/components/WelcomeHero/WelcomeHero'
import BasicLayout from '@/layouts/BasicLayout'

export default function HomePage() {
  return (
    <BasicLayout>
      <WelcomeHero />
    </BasicLayout>
  )
}
