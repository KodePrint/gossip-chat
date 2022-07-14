import { writable } from "svelte/store";

type User = {
  avatar: string;
  userName: string;
  name: string;
  email: string;
  token: string;
}
type Sesion = {
  state: boolean;
  user: User;
}

function session() {
  const { subscribe, set, update } = writable<Sesion>({
    state: false,
    user: {
      avatar: "",
      userName: "",
      name: "",
      email: "",
      token: ""
    }
  })

  return {
    subscribe,
    startSesion: (user: User, token:string) => {
      update(session => {
        session.state = true;
        session.user = user;
        session.user.token = token;
        return session;
      })
    },
    endSesion: () => set(
      { state: false, 
        user: { 
          avatar: "", 
          userName: "", 
          name: "", 
          email: "", 
          token: "" 
        } 
      }
    ) 
  }
}

export const sessionStore = session();
export const activeConversation = writable<any>(null);
export const user = writable<User|null>(null);