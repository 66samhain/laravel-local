import { create } from 'zustand'
import axios from "axios";

export const useStore = create((set, get) => ({
    isLoading: true,
    pages: [],
    user: {
        id: null,
        name: null,
        email: null,
        token: null,
        isAdmin: null,
    },
    bears: 0,
    setIsLoading: (isLoading) => set(() => ({ isLoading: isLoading })),
    setPages: (pages) => set(() => ({ pages: pages })),
    getPages: async () => {
        axios.get('http://localhost:8000/api/pages').then((response) => {
            get().setPages(response.data.data);
            get().setIsLoading(false);
        });
    },
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
                        isAdmin: null,
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
