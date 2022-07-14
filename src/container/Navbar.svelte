<script lang="ts">
  import { supabase, logut } from "../lib/db";
  import { user, sessionStore } from "../store";

  let loading = false;

  const handleLogut = async () => {
    try {
      loading = true;
      await logut();
      sessionStore.endSesion();
      alert("Logout successful");
    } catch (e:any) {
      alert(e.error_description || e.message);
    } finally {
      loading = false;
    }
  };
</script>

  <nav>
    <div>
      <picture>
        <img 
          src={$user ? $user.avatar : ''} 
          alt={$user ? $user.userName : ''}>
        <span>
          {$user ? $user.userName : ''}
        </span>
      </picture>
      <button>new</button>
      <button on:click={handleLogut}>🚫</button>
    </div>
  </nav>