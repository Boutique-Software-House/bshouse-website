<template>
  <div class="clients">
    <div id="title">
      <p>We use the latest technologies to make everithing simpler for:</p>
      <p>
        Utilizamos las últimas tecnologías para hacerlo todo más sencillo para:
      </p>
    </div>
    <div id="images">
      <div class="img_cointener">
        <img src="@/static/images/daimler_truck.png" alt="DAIMLER TRUCK" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/daimler_truck_fsm.png" alt="DAIMLER TRUCK Financial Services México" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/buenos_aires_ciudad.png" alt="Buenos Aires Ciudad" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/adecco.png" alt="ADECCO" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/mercedes-benz_financiera.png" alt="Mercedes-Benz Financiera" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/mercedes-benz.png" alt="Mercedes-Benz" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/arcor.png" alt="Arcor" />
      </div>
      <div class="img_cointener">
        <img src="@/static/images/ingredion.png" alt="Ingredion" />
      </div>
    </div>
  </div>
</template>


<style>
#title {
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  margin-right: 40px;
  width: 60%;
}

#title p:first-child {
  margin-top: 0.3em;
}

#images {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.clients {
  display: flex;
  width: 100%;
  margin-left: 3px;
}

.img_cointener {
  width: 40%;
  margin: 15px 0px;
}

@media (max-width: 900px) {
  #title {
    width: 100%;
  }

  #images {
    width: 100%;
  }

  .clients {
    flex-wrap: wrap;
  }
}

@media (max-width: 670px) {
  .img_cointener img {
    max-width: 100%;
  }

  .img_cointener {
    width: 100%;
  }
}

@media (max-width: 470px) {
  #title {
    font-size: 20px;
  }
}
</style>
