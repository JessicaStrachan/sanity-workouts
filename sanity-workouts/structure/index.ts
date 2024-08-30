import type { StructureResolver } from "sanity/structure";
import {CalendarIcon, UsersIcon, PinIcon} from '@sanity/icons'  

export const  structure: StructureResolver = (S) =>
  S.list ()
    .id('root')
    .title('Content')
    .items([
      S.divider(),
      S.documentTypeListItem('exercise').title('Exercises').icon(PinIcon),
      S.documentTypeListItem('workout').title('Workouts').icon(PinIcon),
      S.documentTypeListItem('intensity').title('Intensities').icon(PinIcon),
      S.documentTypeListItem('programme').title('Programmes').icon(PinIcon),
    ])