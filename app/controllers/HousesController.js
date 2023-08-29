import { housesService } from "../services/HousesService.js";
import { House } from "../models/House.js";
import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";


function _drawHouses() {
    let template = ''
    let houseContainer = document.getElementById('cards-container')
    console.log(AppState.houses)
    AppState.houses.forEach(house => template += house.HouseCardTemplate)
    houseContainer.innerHTML = template
}

export class HousesController {
    constructor() {
        console.log('Houses Controller, loaded up and running.');
        this.getHouses()
        AppState.on('houses', _drawHouses)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            alert('ERROR', error)
        }
    }

    async listHouse() {
        try {
            window.event.preventDefault()
            let form = window.event.target
            let formData = getFormData(form)
            housesService.listHouse(formData)
        } catch (error) {
            console.log('YOOOOOOOO', error)
        }
    }

}