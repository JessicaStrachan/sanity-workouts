import {defineField, defineType, DetailPreview} from 'sanity'
import {workoutType} from './workoutType'
import {CalendarIcon} from '@sanity/icons'

export const programmeType = defineType({
  name: 'programme',
  title: 'Programme',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'workouts', title: 'Workouts'},
    {name: 'intensities', title: 'Intensities'},
  ],
  fields: [
    defineField({
      name: 'name',
      description: 'Programme Name',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      description: 'URL path to the programme page',
      options: {source: 'name'},
      validation: (rule) => rule
        .required()
        .error('Required to generate a page on the website'),
      hidden: ({document}) => !document?.name, //hidden is only visual, inputs remain on the page and keep values
      group: 'details',
    }),
    defineField({
      name: 'description',
      description: 'Programme Description',
      type: 'text',
      group: 'details',
    }),
    defineField({
      name: 'durationInWeeks',
      description: 'Number of Weeks',
      type: 'number',
      group: 'details',
    }),
    defineField({
      name: 'frequency',
      description: 'Programme Frequency',
      type: 'string',
      group: 'details',
    }),
    defineField({
      name: 'structure',
      description: 'Weekly Structure',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'workout'}
        }
      ],
      group: 'workouts',
    }),
    defineField({
      name: 'Week1Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week2Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week3Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week4Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week5Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week6Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Weekl7Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
    }),
    defineField({
      name: 'Week8Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week9Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week10Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Week11Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    }),
    defineField({
      name: 'Weekly12Intensity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'intensity'},
        }
      ],
      group: 'intensities',
    })
  ]
})
