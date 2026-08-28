import HomeHero from '@/components/HomeHero';
import Services from '@/components/Services';
import Styles from './page.module.css';

export default async function Page() {
  return (
    <main>
      <HomeHero />
      <div className={Styles.middlePart}>
        <Services numberOfCards={4} />
      </div>
    </main>
  );
}
