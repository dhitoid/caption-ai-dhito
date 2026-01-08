<script src="https://unpkg.com/@supabase/supabase-js@2"></script>
<script>
  const SUPABASE_URL = 'https://lgkbrgwgdgqfhidjivcr.supabase.co'
  const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxna2JyZ3dnZGdxZmhpZGppdmNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4OTIxMzAsImV4cCI6MjA4MzQ2ODEzMH0.ejJGDTlt_rt69Aa_egmLi8X3mqIMUCaYGzCsXxhgOKY'

  const supabase = supabaseJs.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
  )

  async function loginGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }

  async function logout() {
    await supabase.auth.signOut()
    location.reload()
  }

  async function checkUser() {
    const { data } = await supabase.auth.getUser()
    return data.user
  }
</script>
