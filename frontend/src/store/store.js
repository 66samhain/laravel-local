import { create } from 'zustand'
import axios from "axios";

export const useStore = create((set, get) => ({
    user: {
        id: null,
        name: null,
        email: null,
        token: null,
    },
    bears: 0,
    setUser: (user) => set(() => ({ user: user })),
    doLogin: async (user) => {
        axios.post(`http://localhost:8000/api/login`, user)
            .then((response) => {
                get().setUser(response.data.data)
            })
            .catch(() => {
                console.log('error')
            });
    },
    doLogout: async () => {
        if (get().user) {
            const config = {
                headers: { Authorization: `Bearer ${get().user.token}` }
            };

            axios.post(`http://localhost:8000/api/logout`, {}, config)
                .then((response) => {
                    get().setUser({
                        id: null,
                        name: null,
                        email: null,
                        token: null,
                    });
                })
                .catch(() => {
                    console.log('error')
                });
        }
    },
    doRegister: async (user) => {
        axios.post(`http://localhost:8000/api/register`, user)
            .then((response) => {
                get().setUser(response.data.data)
            })
            .catch(() => {
                console.log('error')
            });
    }
}))
