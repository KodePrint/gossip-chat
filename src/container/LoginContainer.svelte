<script lang="ts">
import { onMount } from "svelte";

  import { supabase } from "../lib/db";
  import styles from "../styles/Login.module.css";

  
  let loading = false;
  let email: string;

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

</script>

<div class={styles.LoginContainer}>
  <form
    on:submit={handleLogin}>
    <picture>
      <img src="" alt="Logo">
    </picture>
    
    <div class={styles.inputGroup}>
      <input
        required 
        type="text">
      <i>I</i>
      <label for="">Username</label>
    </div>

    <div class={styles.inputGroup}>
      <input
        required 
        type="text">
      
      <i>I</i>
      <label for="">Password</label>
    </div>
    <button type="submit">Login</button>
  </form>
</div>