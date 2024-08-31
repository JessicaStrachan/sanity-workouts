import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import Banner from '@/components/Banner';
import Button from '@/components/Button';

const WORKOUT_QUERY = `*[
    _type == "workout" &&
    slug.current == $slug
  ]`;

const EXERCISES_QUERY = `*[  _type == "workout" &&
    slug.current == $slug]{excercises[]->{...}}`

  const { projectId, dataset } = client.config();

  export default async function WorkoutPage({
    params,
  }: {
    params: { slug: string };
  }) {
    const workout = await sanityFetch<string>({
      query: WORKOUT_QUERY,
      params,
    });

    const exercises = await sanityFetch<string>({
      query: EXERCISES_QUERY,
      params,
    });

    // Add description to cms
    const {
      name,
    } = workout;

    const WorkoutsListing = (exercises: any) => {
      const workouts:Array<String> = [];
      exercises.map((exercise: any, i: number) => (
        workouts.push(`<li className="${i + 1 !== exercises.length ? 'mb-4' : ''}" key="${exercise.id}">
          <Button text="${exercise.name}" href="${`/workouts/exercises/${exercise.slug.current}"`} />
          </li>`)
        ))
      return workouts
    }
    const bannerHeading = workout[0].name;
    return (
      <main>
      <Banner heading={bannerHeading} />
      <section className="section">
        <div className="container">
          <ul>
            {WorkoutsListing(exercises[0].excercises)}
          </ul>
        </div>
        </section>
      </main>
    )
}