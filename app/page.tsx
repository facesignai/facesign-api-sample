'use client'
import { useState } from 'react'
import { Link } from '@nextui-org/link'
import { Snippet } from '@nextui-org/snippet'
import { Code } from '@nextui-org/code'
import { Input } from '@nextui-org/input'
import { button as buttonStyles } from '@nextui-org/theme'

import { siteConfig } from '@/config/site'
import { title, subtitle } from '@/components/primitives'
import { GithubIcon } from '@/components/icons'
import { RequestedData } from '@facesignai/api'
import RequestedDataRow from '@/components/RequestedDataRow'

export default function Home () {
  const [requestedData, setRequestedData] = useState<RequestedData[]>([])

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

  const renderRequestedParams = () => {
    return (
      <div className=''>
        {requestedData.map((rd, i) => {
          return (
            <RequestedDataRow
              rd={rd}
              onChange={rd => onRdChanged(rd, i)}
              onDelete={() => deleteRequestedDataRow(i)}
            />
          )
        })}
        <RequestedDataRow onChange={onNewRdChanged} />
      </div>
    )
  }

  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <h2 className='text-lg font-bold'>Session settings</h2>
      <h3>Requested params</h3>
      {renderRequestedParams()}
    </section>
  )
}
