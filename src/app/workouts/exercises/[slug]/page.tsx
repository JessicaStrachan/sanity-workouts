// 'use client';

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityFetch } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import Banner from '@/components/Banner';
import TrackingInput from '@/components/trackingInput';
import { parse } from "path";
// import React, { useRef } from "react";

const EXERCISE_QUERY = `*[
    _type == "exercise" &&
    slug.current == $slug
  ][0]`;

const { projectId, dataset } = client.config();

export default async function ExercisePage({
  params,
}: {
  params: { slug: string };
}) {
  const exercise = await sanityFetch<string>({
    query: EXERCISE_QUERY,
    params,
  });

  const {
    name,
    hint,
    workoutType,
    foundationReps,
    foundationSets
  } = exercise;

  // const formRef = useRef(null);
  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   fetch("YOUR_GOOGLE_SCRIPT_URL", {
  //     method: 'POST',
  //     body: new FormData(formRef.current),
  //   }).then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       alert(data.msg);
  //     })
  //     .catch(err => console.log(err));
  // };

  const noOfSets = (sets:string, reps:string) => {
    const noOfSets = parseInt(sets);
    const noOfReps = parseInt(reps);
    let inputs:Array<String> = [];
    for (let i = 0; i < noOfSets; i++) {
      inputs.push(`<div className="grid grid-cols-2 gap-4" key="${i}">
        <TrackingInput value="${noOfReps}" placeholder="${reps}" copy="Reps"/>
        <TrackingInput value="0" copy="Weight"/>
      </div>
      `) ;
    }
    return inputs
  }

  const bannerHeading = name;
  return (
    <main>
      <Banner heading={name} subHeading={workoutType} />
       <section className="section">
        <div className="container">
          <p>{hint}</p>
        </div>
       </section>
       <section className="section">
        <div className="container">
          <div >
            {noOfSets(foundationSets, foundationReps)}
          </div>
        </div>
       </section>
      {/* <form ref={formRef} onSubmit={handleSubmit}>
        <input name="weight" type="number" placeholder="weight"/>
        <button type="submit">Submit</button>
      </form> */}
    </main>
  )
}