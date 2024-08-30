import {defineField, defineType} from 'sanity'
// import {intensityType} from './intensityType'

export const workoutType = defineType({
  name: 'workout',
  title: 'Workout',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Workout name or focus'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path to the workout page',
      options: {source: 'name'},
      validation: (rule) => rule    
        .required()
        .error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.name, //hidden is only visual, inputs remain on the page and keep values
    }),
    defineField({
      name: 'intensity',
      type: 'array',
      description: 'Workout intensity',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'}
        }
      ],
    }),
    defineField({
      name: 'excercises',
      title: 'Exercises',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'exercise'}
        }
      ],
    })
  ],
})