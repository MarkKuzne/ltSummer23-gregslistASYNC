import { House } from "../models/House.js"
import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { HousesController } from "../controllers/HousesController.js"

const _sandboxApi = axios.create({
    baseURL: "https://sandbox.codeworksacademy.com",
    timeout: 8000
})

class HousesService {
    constructor() {
    }

    async getHouses() {
        const response = await _sandboxApi.get('/api/houses')
        let mappedHouses = response.data.map(house => new House(house))
        AppState.houses = mappedHouses
    }

    async listHouse(formData) {
        console.log(formData)
    }
}

export const housesService = new HousesService()