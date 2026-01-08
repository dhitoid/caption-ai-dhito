const SUPABASE_URL = 'https://lgkbrgwgdgqfhidjivcr.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxna2JyZ3dnZGdxZmhpZGppdmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4OTIxMzAsImV4cCI6MjA4MzQ2ODEzMH0.ejJGDTlt_rt69Aa_egmLi8X3mqIMUCaYGzCsXxhgOKY'

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)

async function loginGoogle() {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.origin
    }
  })

  if (error) alert(error.message)
}

async function logout() {
  await supabaseClient.auth.signOut()
  location.reload()
}

async function checkUser() {
  const { data: { session } } =
    await supabaseClient.auth.getSession()
  return session?.user || null
}