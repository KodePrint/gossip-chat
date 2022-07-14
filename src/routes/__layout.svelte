<script lang="ts">
  // Import Libs
  import {supabase} from "../lib/db";
  // Import Store
  import { sessionStore } from "../store";
  import Navbar from '../container/Navbar.svelte';
  import '../styles/global.css';

  console.log($sessionStore)
</script>

<!-- {#if $user} -->
  <Navbar />
<!-- {/if} -->
<main class="main">
  <slot />
</main>