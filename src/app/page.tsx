import Link from 'next/link';
import { SanityDocument } from 'next-sanity';

import Banner from '@/components/Banner';
import Button from '@/components/Button';

import {sanityFetch} from '@/sanity/client';

const PROGRAMMES_QUERY = `*[
  _type == "programme"
  && defined(slug.current)
]{_id, name, slug}`;


export default async function IndexPage() {
  // const programmes = await sanityFetch<SanityDocument[]>({query: PROGRAMMES_QUERY});
  const programmes = await sanityFetch<string>({query: PROGRAMMES_QUERY});
  const bannerHeading = 'Good morning, Jess';
  
  return (
    <main>
      <Banner heading={bannerHeading} subHeading={''} size={''}/>
      <section className="section">
        <div className="container">
          <ul className="">
            {programmes.map((programme:any, i:number) => (
              <li className={i + 1 !== programmes.length ? 'mb-4' : ''} key={programme.id}>
                <Button text={programme?.name} href={`/programmes/${programme.slug.current}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Button href="/workouts" text="Available workouts" />
        </div>
      </section>
    </main>
  )
}