import { AxiosResponse } from "axios";
import axios from "./axios";
import {NewUser} from "@dinner_match/database/models/User";
const getUser = async (id:number): Promise<AxiosResponse>  => {
    return axios.get("/auth/users/" + id);
}

const getUserByStych = async (uuid:string): Promise<AxiosResponse>  => {
    return axios.get("/auth/users/stytch/" + uuid);
}
const createUser = async (user: NewUser): Promise<AxiosResponse>  => {
    console.log(user);
    return axios.post("/users", user);
}


export { getUser, createUser, getUserByStych }