import { AppState } from "../AppState.js"

export class Car {
  constructor (data) {
    // NOTE data._id and data.id are the same value here
    this.id = data.id || data._id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description || ''
    this.color = data.color || ''
    this.engineType = data.engineType

    // NOTE the id of the person who created this. Same as creator.id or creator._id
    this.creatorId = data.creatorId

    // NOTE creator object that can be drilled into to access name, picture, or id
    this.creator = data.creator

    // NOTE dateStrings from API can be converted into Date objects
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }

  get CardHTMLTemplate() {
    return `
    <div class="col-12 mb-3">
      <div class="row bg-light rounded shadow border border-dark">
        <div class="col-md-4 px-0">
          <img
            src="${this.imgUrl}"
            alt="${this.make + ' ' + this.model}" class="img-fluid rounded-start car-picture">
        </div>
        <div class="col-md-8 p-3">
          <h2>${this.year} ${this.make} ${this.model}</h2>
          <h3>$${this.price}</h3>
          <h3>Listed on ${this.createdAt.toLocaleDateString()}</h3>
          <div class="d-flex">
            <h4>Listed by ${this.creator.name}</h4>
            <img class="creator-picture"
              src="${this.creator.picture}"
              alt="${this.creator.name}">
          </div>
          <p>ENGINE ${this.engineType} ${this.ColorString}</p>
          <p>${this.description}</p>
          <div>
           ${this.DeleteButton}
          </div>
        </div>
      </div>
    </div>
    `

  }

  get ColorString() {
    // NOTE empty string is falsy
    if (!this.color) {
      return ''
    }

    return `| Color : <i class="mdi mdi-circle fs-2" style="color: ${this.color};"></i>`

  }

  get DeleteButton() {
    // NOTE If we are not logged in OR if we are not the creator of this car object
    if (AppState.account == null || this.creatorId != AppState.account.id) {
      return ''
    }

    // NOTE shows delete button only for the creator of the car
    return `<button onclick="app.CarsController.removeCar('${this.id}')" class="btn btn-danger">Delete Car</button>`
  }
}

// const carData = {
//   "_id": "6506f47deb8f3614988524ab",
//   "id": "6506f47deb8f3614988524ab",
//   "make": "Aston Martin",
//   "model": "Valhalla",
//   "imgUrl": "https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/I3BvjD2zREK0FinQCGoyqYrgkzVq3CNSOH2eNqik.jpg",
//   "year": 2020,
//   "price": 123455,
//   "description": "Ideal",
//   "color": "#3cc34c",
//   "engineType": "chuncko",
//   "creatorId": "650617846fdda188181ba406",
//   "createdAt": "2023-09-17T12:43:41.823Z",
//   "updatedAt": "2023-09-17T12:43:41.823Z",
//   "__v": 0,
//   "creator": {
//     "_id": "650617846fdda188181ba406",
//     "name": "jimmyj",
//     "picture": "https://media0.giphy.com/media/7zApYc8tI0fpsR4Rny/giphy.gif?cid=ecf05e47rjwmcrd6jmfmjmncs5x74gigwtvzhd4hus6b24jt&ep=v1_gifs_related&rid=giphy.gif&ct=g",
//     "id": "650617846fdda188181ba406"
//   },
// }