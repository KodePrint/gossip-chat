import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
)

export const loginWithGithub = async () => {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'github',
  })
  if (error) throw error;
  return {user, session, error};
}

export const logut = async () => {
  const { error } = await supabase.auth.signOut()
}

export const getAuthUser = async () => {
  let profile = null
  let token = null
  const user = await supabase.auth.session()
  if (user) {
    profile = user.user?.user_metadata
    token = user.access_token
  }
  return {profile, token};
} 