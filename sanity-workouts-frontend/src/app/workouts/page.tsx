import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";

import BackButton from "@/components/BackButton";
import Banner from '@/components/Banner';
import Button from '@/components/Button';


const WORKOUT_QUERY = `*[
  _type == "workout"
  && defined(slug.current)
]{_id, name, slug}`;

export default async function WorkoutsPage() {
  const workouts = await sanityFetch<SanityDocument[]>({query: WORKOUT_QUERY});
  const bannerHeading = 'Workouts';

  return (
    <main>
      <BackButton url="/" />
      <Banner heading={bannerHeading} />
      <section className="section">
        <div className="container">
          <ul>
            {workouts.map((workout, i) => (
              <li className={i + 1 !== workouts.length ? 'mb-4' : ''} key={workout.id}>
                <Button href={`/workouts/${workout.slug.current}`} text={workout?.name}/>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}