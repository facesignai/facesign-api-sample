const API_KEY = process.env.FACESIGN_API_KEY
import FaceSignClient, { RequestedData, SessionSettings } from '@facesignai/api'

export async function POST (req: Request) {
  try {
    if (!API_KEY) {
      throw new Error('API key is missing from .env')
    }

    const fApi = new FaceSignClient({
      auth: API_KEY
    })

    const { requestedData } = await req.json()

    const sessionSettings: SessionSettings = {
      clientReferenceId: '',
      metadata: {},
      requestedData: requestedData as RequestedData[]
    }

    const { clientSecret, session } = await fApi.session.create(sessionSettings)

    const reply = {
      sessionId: session.id,
      clientSecret
    }

    return new Response(JSON.stringify(reply), {
      status: 200
    })
  } catch (error) {
    console.error('Error retrieving access client secret:', error)

    return new Response('Failed to retrieve client secret', {
      status: 500
    })
  }
}
