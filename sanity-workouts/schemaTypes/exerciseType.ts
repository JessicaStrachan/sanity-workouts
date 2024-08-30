import {defineField, defineType} from 'sanity'

export const exerciseType = defineType({
  name: 'exercise',
  title: 'Exercise',
  type: 'document',
  fieldsets: [
    {name: 'foundation', title: 'Foundation', options: {columns: 3, collapsed: false}},
    {name: 'progressive', title: 'Progressive', options: {columns: 3, collapsed: false}},
    {name: 'peak', title: 'Peak', options: {columns: 3, collapsed: false}},
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Name of the exercise'
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path to the exercise page',
      options: {source: 'name'},
      validation: (rule) => rule
        .required()
        .error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.name, //hidden is only visual, inputs remain on the page and keep values
    }),
    defineField({
      name: 'hint',
      type: 'string',
      description: 'Exercise hint'
    }),
    defineField({
      name: 'workoutType',
      type: 'string',
      description: 'Type of movement',
      options: {
        list: ['Weights', 'Bodyweight', 'Cardio', 'Stretching'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'foundationSets',
      type: 'number',
      description: 'Sets',
      fieldset: 'foundation',
      hidden: ({value, document}) => !value && document?.workoutType === 'Cardio',
    }),
    defineField({
      name: 'foundationReps',
      type: 'number',
      description: 'Reps',
      fieldset: 'foundation',
      hidden: ({value, document}) => !value && document?.workoutType === 'Cardio',
    }),
    defineField({
      name: 'foundationTime',
      type: 'string',
      description: 'Time',
      fieldset: 'foundation',
    }),
    defineField({
      name: 'progressiveSets',
      type: 'number',
      description: 'Sets',
      fieldset: 'progressive',
      hidden: ({value, document}) => !value && document?.workoutType === 'Cardio',
    }),
    defineField({
      name: 'progressiveReps',
      type: 'number',
      description: 'Reps',
      fieldset: 'progressive',
      hidden: ({value, document}) => !value && document?.workoutType === 'Cardio',
    }),
    defineField({
      name: 'progressiveTime',
      type: 'string',
      description: 'Time',
      fieldset: 'progressive'
    }),
    defineField({
      name: 'peakSets',
      type: 'number',
      description: 'Sets',
      fieldset: 'peak',
      hidden: ({value, document}) => !value && document?.workoutType === 'Cardio',
    }),
    defineField({
      name: 'peakReps',
      type: 'number',
      description: 'Reps',
      fieldset: 'peak',
      hidden: ({value, document}) => !value && document?.workoutType === 'Cardio',
    }),
    defineField({
      name: 'peakTime',
      type: 'string',
      description: 'Time',
      fieldset: 'peak'
    }),
  ],
})