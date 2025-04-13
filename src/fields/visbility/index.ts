import type { SelectField } from 'payload'
import { visibilityOptions } from './visibilityOptions'

type VisibilityOverrides = {
  selectOverrides?: Partial<SelectField>
}

type VisibilityField = (overrides?: VisibilityOverrides) => [SelectField]

export const visibilityField: VisibilityField = (overrides = {}) => {
  const { selectOverrides } = overrides

  const visibilityField: SelectField = {
    name: 'visibility',
    type: 'select',
    label: 'Visibility',
    options: visibilityOptions,
    defaultValue: 'Draft',
    required: true,
    admin: {
      position: 'sidebar',
      ...selectOverrides?.admin,
    },
    ...selectOverrides,
  }
  return [visibilityField]
}
