const API_KEY = process.env.FACESIGN_API_KEY
import FaceSignClient, { ILogLevel } from '@facesignai/api'

export async function POST (req: Request) {
  try {
    if (!API_KEY) {
      throw new Error('API key is missing from .env')
    }

    const fApi = new FaceSignClient({
      auth: API_KEY,
      logLevel: ILogLevel.DEBUG
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
