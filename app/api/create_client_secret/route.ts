import FaceSignClient, { ILogLevel } from '@facesignai/api'

const API_KEY = process.env.FACESIGN_API_KEY

export async function POST (req: Request) {
  try {
    if (!API_KEY) {
      throw new Error('API key is missing from .env')
    }

    const fApi = new FaceSignClient({
      auth: API_KEY,
      logLevel: ILogLevel.DEBUG,
      serverUrl: process.env.FACESIGN_SERVER_URL
    })

    const { sessionId } = await req.json()

    const clientSecret = await fApi.session.createClientSecret({ sessionId })

    return new Response(JSON.stringify(clientSecret), {
      status: 200
    })
  } catch (error) {
    console.error('Error creating client secret:', error)

    return new Response('Failed to create client secret', {
      status: 500
    })
  }
}
