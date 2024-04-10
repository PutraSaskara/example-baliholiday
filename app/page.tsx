import Hero from '@/components/Hero'
import Hero2 from '@/components/Hero2'
import ListBlog from '../components/ListBlog'
import ListTour from '../components/ListTour'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Hero2/>
      <ListTour/>
      <ListBlog/>
    </main>
  );
}
