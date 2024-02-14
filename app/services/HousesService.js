import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"

class HousesService {
  async getHouses() {
    console.log("running the Get Houses in my houses service")

    const response = await api.get('api/houses')

    const newHouses = response.data.map(housePOJO => new House(housePOJO))

    AppState.houses = newHouses

  }


}
export const housesService = new HousesService