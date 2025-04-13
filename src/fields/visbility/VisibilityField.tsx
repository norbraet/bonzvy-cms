import { FC } from 'react'
import { useField, Select, FieldLabel } from '@payloadcms/ui'
import { visibilityOptions } from '@/fields/visbility/visibilityOptions'

type VisibilityFieldProps = {
  label: string
  path: string
}

const VisibilityField: FC<VisibilityFieldProps> = ({ label, path }) => {
  const { value, setValue } = useField<string>({ path })
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target.value)

  return (
    <div className="visibility-field">
      <FieldLabel htmlFor={path} label={label} />

      <Select id={path} value={value} onChange={handleChange}>
        {visibilityOptions.map((option) => {
          ;<option key={option.value} value={option.value}>
            {option.label}
          </option>
        })}
      </Select>
    </div>
  )
}

export default VisibilityField
