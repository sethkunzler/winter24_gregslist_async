export class House {
  constructor(data) {
      this.id = data.id
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.levels = data.levels
      this.imgUrl = data.imgUrl
      this.year = data.year
      this.price = data.price
      this.description = data.description
      this.creatorId = data.creatorId
      this.creator = data.creator
  }

  get HouseCardTemplate() {
    return /*html*/ `
    <div class="row bg-light rounded shadow border border-dark my-2">
    <div class="col-md-4 px-0">
      <img
        src="https://dealerinspire-image-library-prod.s3.us-east-1.amazonaws.com/images/I3BvjD2zREK0FinQCGoyqYrgkzVq3CNSOH2eNqik.jpg"
        alt="" class="img-fluid rounded-start car-picture">
    </div>
    <div class="col-md-8 p-3">
      <section class="container">
        <div class="row">
          <div class="col-12 my-2 text-center">
            <h2>2 Bed | 2 Bath</h2>
          </div>
          <div class="col-12 my-2 d-flex justify-content-around align-items-center text-center">
            <h4>Levels: 1</h4>
            <span class="fs-3"> -- </span>
            <h3>Made in 1987</h3>
            <span class="fs-3"> -- </span>
            <h4>$300</h4>
          </div>
          <div class="col-12 my-2 text-center">
            <div class="text-center">
              <h5>Listed by SOME DUDE</h5>
              <img class="creator-picture"
                src="https://media0.giphy.com/media/7zApYc8tI0fpsR4Rny/giphy.gif?cid=ecf05e47rjwmcrd6jmfmjmncs5x74gigwtvzhd4hus6b24jt&ep=v1_gifs_related&rid=giphy.gif&ct=g"
                alt="">
                <h6>Listed on 12/12/1200</h6>
            </div>
            <div class="d-flex justify-content-center">
              <p class="text-start">Here be the description of the house. </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
    `
  }
}