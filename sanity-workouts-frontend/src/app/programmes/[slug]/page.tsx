

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackButton";
import Banner from '@/components/Banner';
import Button from '@/components/Button';

const PROGRAMME_QUERY = `*[
    _type == "programme" &&
    slug.current == $slug
  ][0]`;

const STRUCTURE_QUERY = `*[_type == 'programme'] {
  structure[]-> {
    ...
  }
}`;

const { projectId, dataset } = client.config();

export default async function ProgrammePage({
  params,
}: {
  params: { slug: string };
}) {

  const programme = await sanityFetch<SanityDocument>({
    query: PROGRAMME_QUERY,
    params,
  });

  const structure = await sanityFetch<SanityDocument[]>({query: STRUCTURE_QUERY});

  const {
    name,
    description,
    durationInWeeks,
    frequency,
  } = programme;
    
  const weeklyWorkouts = () => {
    const workouts = []
    structure[0].structure.map((item, i) => (
      workouts.push(<li className={i + 1 !== structure[0].structure.length ? 'mb-4' : ''} key={i}>
        <Button text={item.name} href={`/workouts/${item.slug.current}`} />
        </li>)
      ))
    return workouts
  }
  const weeklySchedule = (duration: number) => {
    const week = [];
    for (let i = 1; i <= duration; i++) {
        week.push(<div><Banner key={i} heading={`Week ${i}`} size="small" /><ul>{weeklyWorkouts()}</ul></div>);
    }
    return week;
  };

  const bannerHeading = name;
  return (
    <main>
      <BackButton url="/" />
      <Banner heading={bannerHeading} />
      <section className="section">
        <div className="container">
          {description ? (<p>{description}</p>) : null}
          {durationInWeeks ? (<p>{durationInWeeks} weeks</p>) : null}
          {frequency ? (<p>{frequency}</p>) : null}
        </div>
      </section>
      <section className="section">
        <div className="container">
          {weeklySchedule(durationInWeeks)}
        </div>
      </section>

    </main>
  );
}