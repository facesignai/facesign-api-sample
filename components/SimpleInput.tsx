import { useState, FC, useRef, useEffect } from 'react'
import { Input } from '@nextui-org/input'

type Props = {
  label: string
  value: string
  onChange: (v: string) => void
  clearOnApply?: boolean
  isDisabled?: boolean
}

const SimpleInput: FC<Props> = ({
  value,
  onChange,
  label,
  clearOnApply,
  isDisabled
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [v, setV] = useState<string>(value)

  useEffect(() => {
    setV(value ? value.toString() : '')
  }, [value])

  const apply = () => {
    console.log('onBlur, apply', v)
    onChange(v)
    if (clearOnApply) {
      setV('')
    }
  }

  return (
    <Input
      size='sm'
      ref={ref}
      value={v}
      onValueChange={setV}
      labelPlacement='inside'
      label={label}
      onBlur={apply}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          ref.current?.blur()
        }
      }}
      isDisabled={isDisabled}
    />
  )
}

export default SimpleInput
