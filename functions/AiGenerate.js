import { chatSessions } from '../lib/GoogleGemniModel'
export const AIgenerate = async (Description) => {
  const FeedBackPrompt = `Read the ${Description} completely and then give me a breif description for the project so that i can add it in my resume. Just give me the description and nothing else`

  const Gemni_Response = await chatSessions.sendMessage(FeedBackPrompt)
  const MockJsonResponse = Gemni_Response.response.text()

  return MockJsonResponse
}
