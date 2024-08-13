import SimpleInput from '@/components/SimpleInput'
import { RequestedData } from '@facesignai/api'
import { FC } from 'react'

type Props = {
  rd?: RequestedData
  onChange: (rd: RequestedData) => void
  onDelete?: () => void
}

const RequestedDataRow: FC<Props> = ({ rd, onChange }) => {
  const onKeyChanged = (v: string) => {
    onChange({ ...(rd || {}), key: v })
  }

  const onDescriptionChanged = (v: string) => {
    onChange({ ...(rd || { key: '' }), description: v })
  }

  return (
    <div className='flex flex-row'>
      <SimpleInput label='key' value={rd?.key || ''} onChange={onKeyChanged} />
      <SimpleInput
        label='description'
        value={rd?.description || ''}
        onChange={onDescriptionChanged}
        isDisabled={!rd || rd.key == ''}
      />
    </div>
  )
}

export default RequestedDataRow
