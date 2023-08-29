export class House {
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorid = data.creatorid

    }

    get HouseCardTemplate() {
        return /*html*/ `
              <div class="col-12 col-md-6 m-0 p-0 d-flex flex-row justify-content-center">
        <div class="card border border-2 border-info mt-5 mb-5" style="width: 30rem;">
          <img class="card-img-top shadow"
            src="${this.imgUrl}"
            alt="THIS HOUSE IMAGE IS BROKEN SO YOU CANNOT SEE HOUSE.">
          <div class="card-body">
            <h3 class="card-title badge" style="background-color: #962eae;" id="house-cost">Cost: $${this.price}</h3>
            <p class="card-text" id="house-desc">${this.description}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="house-bed">Bedrooms: ${this.bedrooms}</li>
            <li class="list-group-item" id="house-bath">Bathrooms: ${this.bathrooms}</li>
            <li class="list-group-item" id="house-levels">Levels: ${this.levels}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link btn btn-grad"><i class="mdi mdi-home"></i> BUY HOUSE NOW! <i
                class="mdi mdi-home"></i></a>
          </div>
        </div>
      </div>
      `
    }
}