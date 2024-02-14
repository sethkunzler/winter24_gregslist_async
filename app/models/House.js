export class House {
  constructor(data) {
      this.id = data.id | data._id
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.levels = data.levels
      this.imgUrl = data.imgUrl
      this.year = data.year
      this.price = data.price
      this.timeCreated = new Date(data.createdAt)
      this.timeUpdated = new Date(data.updatedAt)
      this.description = data.description
      this.creatorId = data.creatorId
      this.creator = data.creator
  }

  get HouseCardTemplate() {
    return /*html*/ `
    <div class="row bg-light rounded shadow border border-dark my-4">
    <div class="col-md-4 px-0">
      <img
        src="${this.imgUrl}"
        alt="${this.levels + ' story building ' + this.bedrooms + ' bed ' + this.bathrooms + ' bath'}" class="img-fluid rounded-start car-picture">
    </div>
    <div class="col-md-8 p-3">
      <section class="container">
        <div class="row">
          <div class="col-12 my-2 text-center">
            <h2>${this.bedrooms} Bed | ${this.bathrooms} Bath</h2>
          </div>
          <div class="col-12 my-2 d-flex justify-content-around align-items-center text-center">
            <h4>Levels: ${this.levels}</h4>
            <span class="fs-3"> -- </span>
            <h3>Made in ${this.year}</h3>
            <span class="fs-3"> -- </span>
            <h4>$${this.price}</h4>
          </div>
          <div class="col-12 my-2 text-center">
            <div class="text-center">
              <h5>Listed by ${this.creator.name}</h5>
              <img class="creator-picture"
                src="${this.creator.picture}"
                alt="${this.creator.name}">
                <h6>Listed on ${this.timeCreated.toLocaleDateString()} at ${this.timeCreated.toLocaleTimeString()}</h6>
            </div>
            <div class="d-flex justify-content-center">
              <p class="text-start">${this.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    `
  }
}