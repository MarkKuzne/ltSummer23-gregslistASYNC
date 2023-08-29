export const HousesView = /*html*/ `    <section class="row p-0 m-0">
    <section class="row p-0 m-0 sticky-top">
      <button class="btn btn-grad p-0 m-0 p-2 text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
        CREATE A HOUSE LISTING!!!!
      </button>
      <div class="col-12 p-0 m-0 d-flex flex-row justify-content-center">
        <form class="w-50 collapse bg-white p-5 shadow mt-5" id="collapseForm"
          onsubmit="app.HousesController.listHouse()">
          <div class="form-group">
            <h2 class="m-0 p-0 text-center mt-3">CREATE HOUSE LISTING</h2>
            <input type="text" class="form-control bg-white mt-3" placeholder="HOUSE PRICE" name="price" maxlength="15"
              required>
            <input type="text" class="form-control bg-white mt-3" placeholder="HOUSE DESCRIPTION" name="description"
              maxlength="300" required>
            <input type="text" class="form-control bg-white mt-3" placeholder="HOUSE IMAGE URL" name="imageUrl"
              required>
            <input type="text" class="form-control bg-white mt-3" placeholder="BATHROOM AMOUNT" name="bathrooms"
              required>
            <input type="text" class="form-control bg-white mt-3" placeholder="BEDROOM AMOUNT" name="bedrooms" required>
            <input type="text" class="form-control bg-white mt-3" placeholder="HOW MANY FLOORS" name="levels" required>
            <button class="btn btn-dark mt-3" type="submit">CREATE LISTING</button>
          </div>
        </form>
      </div>
    </section>
      <div class="col-12 p-0 m-0">
        <h2 class="p-0 m-0 text-center mt-3">House Listings</h2>
        <h3 class="p-0 m-0 text-center mt-2">Buy Your Dream House</h3>
        <h4 class="p-0 m-0 text-center mt-2">Or List It!</h4>
      </div>
    </section>
    <!-- HOUSE CARDS -->
    <section class="row p-0 m-0" id="cards-container">
      <!-- CARD -->
      <!-- <div class="col-12 col-md-6 m-0 p-0 d-flex flex-row justify-content-center">
        <div class="card border border-2 border-info mt-5 mb-5" style="width: 30rem;">
          <img class="card-img-top shadow"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title" id="house-title">House Title</h5>
            <h6 class="card-title badge" style="background-color: #962eae;" id="house-cost">Cost: $1,000,000</h6>
            <p class="card-text" id="house-desc">This is where your house description goes.
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item" id="house-bed">Bedrooms: 12</li>
            <li class="list-group-item" id="house-bath">Bathrooms: 6</li>
            <li class="list-group-item" id="house-levels">Levels: 2</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link btn btn-grad"><i class="mdi mdi-home"></i> BUY HOUSE NOW! <i
                class="mdi mdi-home"></i></a>
          </div>
        </div>
      </div> -->
      <!-- CARD -->
    </section>`