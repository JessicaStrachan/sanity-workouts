import {defineField, defineType} from 'sanity'

export const intensityType = defineType({
  name: 'intensity',
  title: 'Intensity',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Name of the intensity level'
    }),
  ],
})