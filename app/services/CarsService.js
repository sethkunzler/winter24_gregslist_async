import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js";

class CarsService {

  async getCars() {

    // NOTE appends 'api/cars' to the end of our baseURL
    const response = await api.get('api/cars')

    // NOTE always log your response data and look at it in your console
    console.log('📡 got cars', response.data);

    // NOTE response.data was the array of data, so we map over that. Yesterday it was stored in an object under data (response.data.data), so always look at your response to figure out where the data is stored
    const newCars = response.data.map(carPOJO => new Car(carPOJO))

    console.log('mapped over cars', newCars);

    // REVIEW reverses an array, so you can see newly created first
    // newCars.reverse()

    AppState.cars = newCars
  }

  async createCar(carFormData) {
    // console.log('car form data', carFormData);

    // NOTE the second argument passed to the axios instance here becomes our request body (payload). This is the object that we want to store in the database that the codeworks api interacts with
    const response = await api.post('api/cars', carFormData)

    // NOTE the response data is the single newly created object stored in the database. Has additional fields assigned by the api such as id, _id, createdAt, updatedAt, creatorId, creator, etc...
    console.log('📡 creating car', response.data);

    // NOTE we take the single object sent back by the api and convert it into our class model
    const newCar = new Car(response.data)

    console.log('new car', newCar);

    // NOTE store in our AppState, triggers the listener so user does not have to refresh to see newly created data
    AppState.cars.push(newCar)

    // REVIEW instead of adding an element to the end of an array, adds it to the beginning
    // AppState.cars.unshift(newCar)
  }

  async removeCar(carId) {
    // NOTE on the delete request, we specify the id of the resource that we want to delete in the request url, following the resource type. No second argument is passed, delete requests should not have a request body
    const response = await api.delete(`api/cars/${carId}`)

    // NOTE the response.data in this case is just a string telling us the resource was successfully deleted. Good to log, but we won't use it on our code after this
    console.log('📡 deleting car', response.data);

    // NOTE the car that we want to delete is in our AppState still, so we use the id from the network request to find the index of that car and splice it out
    const carIndex = AppState.cars.findIndex(car => car.id == carId)

    if (carIndex == -1) {
      throw new Error('Index was -1, you messed up the findIndex')
    }

    // NOTE make sure we do this after the delete request was successful
    AppState.cars.splice(carIndex, 1)
  }

}

export const carsService = new CarsService()