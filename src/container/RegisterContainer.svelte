<script lang="ts">
  import { afterUpdate, onDestroy, onMount } from "svelte";
  import { user } from "../store";
  import { supabase, loginWithGithub } from "../lib/db";
  import styles from "../styles/Register.module.css";


  let loading = false;
  let email: string;

  // Login with register email in supabase
  const handleLogin = async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      loading = true;
      const { error } = await supabase.auth.signIn({ email })
      if (error) throw error;
      alert('Check your email for the login link.') 
    } catch(e: any) {
      alert(e.error_description || e.message)
    } finally {
      loading = false;
    }
  };

  // Login with github in supabase
  async function handleLoginGithub() {
    let user = await loginWithGithub();
  }
</script>

<div class={styles.LoginContainer}>
  <form
    on:submit={handleLogin}>
    <picture>
      <img src="" alt="Logo">
    </picture>
    <h3>SingUp</h3>
    <div class={styles.inputGroup}>
      <input
        required 
        type="email">
      
      <label for="">Enter your email</label>
    </div>
    <button type="submit">Login</button>
  </form>
  <button
    on:click={handleLoginGithub}>
    Login with Github
  </button>
</div>