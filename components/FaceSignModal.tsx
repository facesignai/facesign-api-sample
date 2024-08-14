import { ClientSecret } from '@facesignai/api'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@nextui-org/modal'
import { FC, useEffect } from 'react'

type Props = {
  isOpen: boolean
  onClose: () => void
  clientSecret: ClientSecret
}

const FaceSignModal: FC<Props> = ({ isOpen, clientSecret, onClose }) => {
  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      onClose()
    }
  }

  useEffect(() => {
    window.removeEventListener('message', onMessage)
    window.addEventListener('message', onMessage)
  }, [clientSecret])

  const onMessage = (event: MessageEvent<any>) => {
    if (event.origin === 'https://identity.facefile.co') {
      console.log('onMessage', event)
    }
  }

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className='h-full'>
        <iframe
          src={clientSecret.url}
          height='100%'
          width='100%'
          allow='camera; microphone'
        />
      </ModalContent>
    </Modal>
  )
}

export default FaceSignModal
