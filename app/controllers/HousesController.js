import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
  const houses = AppState.houses
  let htmlString = ''
  houses.forEach(house => htmlString += house.HouseCardTemplate)
  setHTML('houseListings', htmlString)
}

export class HousesController {
  constructor() {
    console.log("loading houses Controller")
    this.getHouses()

    AppState.on('houses', _drawHouses)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
      Pop.success('Got Houses')
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}