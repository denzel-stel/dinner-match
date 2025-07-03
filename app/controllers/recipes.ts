import { AxiosResponse } from "axios";
import axios from "./axios";

/**
 * Gets a list of recipes from the server. This endpoint is protected by
 * authentication.
 *
 * @returns {Promise<void>} A promise that resolves when the request completes.
 * The promise does not resolve with any value.
 */
const getRecipes =  async (): Promise<AxiosResponse>  => {
    return axios.get("/auth/recipes");
}

export { getRecipes }