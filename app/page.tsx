'use client'
import { useState, useMemo } from 'react'

import { ClientSecret, RequestedData, Session } from '@facesignai/api'
import RequestedDataRow from '@/components/RequestedDataRow'
import { Button } from '@nextui-org/button'
import dayjs from 'dayjs'
import FaceSignModal from '@/components/FaceSignModal'

export default function Home () {
  const [requestedData, setRequestedData] = useState<RequestedData[]>([])
  const [sessionId, setSessionId] = useState<string>()
  const [session, setSession] = useState<Session>()
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
      setSession(undefined)
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

  const onRetrieveOutputDataClick = async () => {
    try {
      const response = await fetch('/api/retrieve_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId
        })
      })
      const session = await response.json()
      setSession(session)
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
        <span className='text-xs text-gray-500 max-w-2xl'>
          {
            "Fill the form to create a task for FaseSign. Keys are variable name of the output object. They descibe data that you would like to get about the user. For example: userName, carModel, phone etc. If the key seems too abstract, add the key description to the description field, for example: the model of the user's current car."
          }
        </span>
        {renderRequestedParams()}
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

          <div className='flex flex-row pt-8 gap-4'>
            <Button
              size='md'
              variant='bordered'
              onClick={onCreateClientSecretClick}
            >
              Create new client secret
            </Button>
            <Button
              color='secondary'
              isDisabled={!clientSecret}
              onClick={() => setModalIsOpen(true)}
            >
              Start session
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

  const renderOutputData = () => {
    if (sessionId) {
      return (
        <div className='flex flex-col  gap-2'>
          {session && session.data && (
            <div>
              {Object.keys(session.data).map(k => (
                <p className='text-sm' key={k}>
                  {k}:{' '}
                  <b>{session.data[k] === null ? 'null' : session.data[k]}</b>
                </p>
              ))}
            </div>
          )}
          {session && session.transcript && (
            <div className='pt-2'>
              <p>
                <b>Transcript:</b>
              </p>
              {session.transcript.map(phrase => (
                <p className='text-sm' key={phrase.id}>
                  <span className='text-gray-600'>
                    {phrase.isAvatar ? 'Avatar: ' : 'User: '}
                  </span>
                  {phrase.text}
                </p>
              ))}
            </div>
          )}
          <div className='flex pt-4'>
            <Button
              size='sm'
              variant='bordered'
              onClick={onRetrieveOutputDataClick}
            >
              Retrieve output data
            </Button>
          </div>
        </div>
      )
    }
  }

  return (
    <section className='flex flex-col items-center justify-center gap-6 py-4 md:py-4'>
      {renderRequestedData()}
      <div className='flex flex-row py-4 gap-4 w-full justify-start'>
        <Button
          color='primary'
          onClick={onCreateSessionClick}
          isDisabled={requestedDataIsEmpty}
        >
          Create session
        </Button>
      </div>
      {sessionId && (
        <div className='flex md:flex-row flex-col w-full gap-6'>
          <div className='flex flex-col gap-4 items-start w-full flex-1'>
            <h2 className='font-semibold text-lg'>Current session</h2>
            {renderCurrentSession()}
          </div>
          <div className='flex flex-col gap-4 items-start w-full flex-1'>
            <h2 className='font-semibold text-lg'>Output data</h2>
            {renderOutputData()}
          </div>
        </div>
      )}
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
