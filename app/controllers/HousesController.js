import { AppState } from "../AppState.js"
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

    AppState.on('houses', _drawHouses)
  }


}