'use client'
import { useState, useMemo } from 'react'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { Input } from '@nextui-org/input'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import { ClientSecret, RequestedData } from '@facesignai/api'
import RequestedDataRow from '@/components/RequestedDataRow'
import { Button } from '@nextui-org/button'
import dayjs from 'dayjs'
import FaceSignModal from '@/components/FaceSignModal'

export default function Home () {
  const [requestedData, setRequestedData] = useState<RequestedData[]>([])
  const [sessionId, setSessionId] = useState<string>()
  const [clientSecret, setClientSecret] = useState<ClientSecret>()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const requestedDataIsEmpty = useMemo(() => {
    return requestedData.filter(rd => rd.key.trim() !== '').length === 0
  }, [requestedData])

  const onNewRdChanged = (rd: RequestedData) => {
    setRequestedData([...requestedData, rd])
  }

  const deleteRequestedDataRow = (i: number) => {
    const newRD = [...requestedData]
    newRD.splice(i, 1)
    setRequestedData(newRD)
  }

  const onRdChanged = (rd: RequestedData, i: number) => {
    const newRD = [...requestedData]
    newRD[i] = rd
    setRequestedData(newRD)
  }

  const showAddRow = useMemo(() => {
    const isEmpty = requestedData.length === 0
    const allKeysEntered =
      requestedData.filter(rd => rd.key.trim() === '').length === 0
    return isEmpty || allKeysEntered
  }, [requestedData])

  const onCreateSessionClick = async () => {
    try {
      const response = await fetch('/api/create_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          requestedData
        })
      })
      const { sessionId, clientSecret } = await response.json()
      setSessionId(sessionId)
      setClientSecret(clientSecret)
    } catch (error) {
      console.error('onCreateSessionClick:', error)
    }
  }

  const onCreateClientSecretClick = async () => {
    try {
      const response = await fetch('/api/create_client_secret', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId
        })
      })
      const clientSecret = await response.json()
      setClientSecret(clientSecret)
    } catch (error) {
      console.error('onCreateSessionClick:', error)
    }
  }

  const renderRequestedParams = () => {
    return (
      <div className='w-full flex flex-col gap-2'>
        {requestedData.map((rd, i) => {
          return (
            <RequestedDataRow
              key={i}
              rd={rd}
              onChange={rd => onRdChanged(rd, i)}
              onDelete={() => deleteRequestedDataRow(i)}
            />
          )
        })}
        {showAddRow && (
          <RequestedDataRow
            key={'addRow' + requestedData.length}
            onChange={onNewRdChanged}
          />
        )}
      </div>
    )
  }

  const renderRequestedData = () => {
    return (
      <div className='flex flex-col gap-2 items-start w-full'>
        <h2 className='font-semibold text-lg'>Requested params</h2>
        <span className='text-xs text-gray-500'>
          Fill the form to create a task for FaseSign.
        </span>
        {renderRequestedParams()}
      </div>
    )
  }

  const renderButtons = () => {
    return (
      <div className='flex flex-row pt-8 gap-4'>
        <Button
          color='primary'
          onClick={onCreateSessionClick}
          isDisabled={requestedDataIsEmpty}
        >
          Create session
        </Button>
        <Button
          color='secondary'
          isDisabled={!clientSecret}
          onClick={() => setModalIsOpen(true)}
        >
          Start session
        </Button>
      </div>
    )
  }

  const renderCurrentSession = () => {
    if (sessionId) {
      return (
        <div className='flex flex-col  gap-2'>
          <div className='flex '>
            <span className='text-sm'>
              SessionId: <b>{sessionId}</b>
            </span>
          </div>

          <div className='flex flex-row gap-4'>
            <span className='text-sm'>
              Client secret: <b>{clientSecret ? clientSecret.secret : '-'}</b>
            </span>
          </div>
          <div className='flex flex-row gap-4'>
            <span className='text-sm'>
              Client secret expire at:{' '}
              <b>
                {clientSecret
                  ? dayjs(clientSecret.expireAt).format('MMM D, YYYY h:mm A')
                  : '-'}
              </b>
            </span>
          </div>

          <div className='flex '>
            <Button
              size='sm'
              variant='bordered'
              onClick={onCreateClientSecretClick}
            >
              Create new client secret
            </Button>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <span className='text-xs text-gray-500'>
            Session is not created, click on Create Session button first
          </span>
        </div>
      )
    }
  }

  return (
    <section className='flex flex-col items-center justify-center gap-6 py-4 md:py-4'>
      {renderRequestedData()}
      <div className='flex flex-col gap-4 items-start w-full'>
        <h2 className='font-semibold text-lg'>Current session</h2>
        {renderCurrentSession()}
      </div>
      {renderButtons()}
      {clientSecret && (
        <FaceSignModal
          clientSecret={clientSecret}
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
      )}
    </section>
  )
}
