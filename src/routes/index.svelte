<script lang="ts">
  import { afterUpdate, onMount } from "svelte";

  // Import libs
  import {supabase, getAuthUser} from "../lib/db";
  
  // Import Store
  import { sessionStore } from "../store";
  
  // Import Components
  import RegisterContainer from "../container/RegisterContainer.svelte";

  // Import Services
  import { getSupabaseSesion } from "../services/supabase";

  let user = null

  async function getsession() {
    let session = await supabase.auth.session()
    if (session) {
      const { access_token , user } = session
      console.log(session)
      sessionStore.startSesion(user?.user_metadata, access_token)
    }
  }

  getsession()

</script>

<svelte:head>
  <title>enigmachat</title>
  <meta name='description' content="El chat secreto de la comunidad">
</svelte:head>

{#if $sessionStore.state === false}
  <RegisterContainer />
{/if}
