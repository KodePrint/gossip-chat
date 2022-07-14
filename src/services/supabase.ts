import { supabase } from "../lib/db";

export const getSupabaseSesion = () => {
  const sesion = supabase.auth.session();
  if (sesion) {
    const { access_token, user } = sesion;
    return {
      token: access_token,
      user: user.user_metadata,
    }
  } else {
    return {
      token: null,
      user: null,
    }
  }
}