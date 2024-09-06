import { FC, useState, useEffect } from 'react'
import { Select, SelectItem } from '@nextui-org/select'
import { Button } from '@nextui-org/button'
import { Chip } from '@nextui-org/chip'
import voicesData from './voices.json'

type Voice = {
  voice_id: string
  display_name: string
  preview: {
    movio: string
  }
  gender: string
  tags: string
  settings: {
    elevenlabs_settings: any | null
  }
}

type Props = {
  value?: string
  onSelect: (voiceId: string) => void
}

const VoiceSelect: FC<Props> = ({ value, onSelect }) => {
  const [voices, setVoices] = useState<Voice[]>([])
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const englishVoices = voicesData.data.list.filter(
      voice => voice.language === 'English'
    )
    const sortedVoices = englishVoices.sort((a, b) =>
      a.display_name.localeCompare(b.display_name)
    )
    setVoices(sortedVoices)
  }, [])

  const playAudio = (url: string) => {
    if (audio) {
      audio.pause()
    }
    const newAudio = new Audio(url)
    newAudio.play()
    setAudio(newAudio)
  }

  const selectedVoice = voices.find(voice => voice.voice_id === value)

  const renderVoiceOption = (voice: Voice) => (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-row gap-4 items-baseline'>
          <span>{voice.display_name}</span>
          <span className='text-xs text-gray-500 font-semibold'>
            {voice.gender}
          </span>
          {voice.tags && (
            <span className='text-xs text-gray-500'>{voice.tags}</span>
          )}
          {voice.settings.elevenlabs_settings !== null && (
            <Chip size='sm' color='warning' variant='light'>
              ElevenLabs
            </Chip>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className='flex items-center space-x-2 w-full'>
      <Select
        size='sm'
        label='Select a voice'
        placeholder='Choose a voice'
        value={value}
        onChange={e => onSelect(e.target.value)}
        selectedKeys={value ? [value] : []}
        renderValue={
          selectedVoice ? () => renderVoiceOption(selectedVoice) : undefined
        }
      >
        {voices.map(voice => (
          <SelectItem
            key={voice.voice_id}
            value={voice.voice_id}
            textValue={voice.voice_id}
          >
            {renderVoiceOption(voice)}
          </SelectItem>
        ))}
      </Select>
      <Button
        size='sm'
        isDisabled={!selectedVoice}
        onClick={() => selectedVoice && playAudio(selectedVoice.preview.movio)}
      >
        Play
      </Button>
    </div>
  )
}

export default VoiceSelect
