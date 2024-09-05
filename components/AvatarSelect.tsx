import { FC } from 'react'
import { Select, SelectItem } from '@nextui-org/select'

type Props = {
  value?: string
  onSelect: (avatarId: string) => void
}

const AvatarSelect: FC<Props> = ({ value, onSelect }) => {
  const avatars = [
    { value: 'Wayne_20240711', label: 'Wayne' },
    { value: 'josh_lite3_20230714', label: 'Josh' },
    { value: 'Anna_public_20240108', label: 'Anna' },
    { value: 'Eric_public_pro2_20230608', label: 'Eric' },
    { value: 'Susan_public_2_20240328', label: 'Susan' },
    { value: 'Wade_public_2_20240228', label: 'Wade' },
    { value: 'Justin_public_3_20240308', label: 'Justin' },
    { value: 'Anna_public_3_20240108', label: 'Anna' },
    { value: 'Angela-inblackskirt-20220820', label: 'Angela' },
    { value: 'Lily_public_pro1_20230614', label: 'Lily' },
    { value: 'Briana_public_3_20240110', label: 'Briana' }
  ]

  return (
    <Select
      size='sm'
      label='Select an avatar'
      placeholder='Choose an avatar'
      value={value}
      onChange={e => onSelect(e.target.value)}
    >
      {avatars.map(avatar => (
        <SelectItem key={avatar.value} value={avatar.value}>
          {avatar.label}
        </SelectItem>
      ))}
    </Select>
  )
}

export default AvatarSelect
