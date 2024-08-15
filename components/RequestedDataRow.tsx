import SimpleInput from '@/components/SimpleInput'
import { Checkbox } from '@nextui-org/checkbox'
import { RequestedData } from '@facesignai/api'
import { FC } from 'react'
import { TrashIcon } from '@/components/icons'
import { Button } from '@nextui-org/button'

type Props = {
  rd?: RequestedData
  onChange: (rd: RequestedData) => void
  onDelete?: () => void
}

const RequestedDataRow: FC<Props> = ({ rd, onChange, onDelete }) => {
  const onKeyChanged = (v: string) => {
    if (!rd && v.trim() === '') return
    onChange({ ...(rd || {}), key: v, isRequired: rd ? rd.isRequired : true })
  }

  const onDescriptionChanged = (v: string) => {
    onChange({ ...(rd || { key: '' }), description: v })
  }

  const onRequiredChanged = (isSelected: boolean) => {
    onChange({ ...(rd || { key: '' }), isRequired: isSelected })
  }

  return (
    <div className='flex flex-row gap-2 items-center'>
      <div className='w-full flex-col flex-1 flex md:flex-row gap-1 md:gap-2'>
        <div className='flex-1'>
          <SimpleInput
            label='key'
            value={rd?.key || ''}
            onChange={onKeyChanged}
          />
        </div>
        <div className='flex-[2_2_0%]'>
          <SimpleInput
            label='description'
            value={rd?.description || ''}
            onChange={onDescriptionChanged}
            isDisabled={!rd || rd.key === ''}
          />
        </div>
      </div>
      <div className='flex w-14'>
        {rd && (
          <Checkbox
            defaultSelected
            size='sm'
            isSelected={rd?.isRequired || false}
            onValueChange={onRequiredChanged}
            className='flex flex-col justify-center'
          >
            Required
          </Checkbox>
        )}
      </div>
      <div className='flex w-6'>
        {onDelete && (
          <Button
            isIconOnly
            color='danger'
            aria-label='delete'
            size='sm'
            variant='light'
            onClick={onDelete}
          >
            <TrashIcon />
          </Button>
        )}
      </div>
    </div>
  )
}

export default RequestedDataRow
