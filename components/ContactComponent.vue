<template>
  <div id="media">
    <div class="icon">
      <a href="https://api.whatsapp.com/send?phone=541136563300" target="_blank"><i class="lab la-whatsapp"></i></a>
    </div>
    <div class="icon">
      <a href="mailto:info@bshouse.io"><i class="las la-at"></i></a>
    </div>
    <div class="icon">
      <a href="https://www.linkedin.com/company/bshouse/" target="_blank"><i class="lab la-linkedin-in"></i></a>
    </div>
    <div class="icon">
      <a href="https://www.instagram.com/bshouse.io/" target="_blank"><i class="lab la-instagram"></i></a>
    </div>
  </div>
</template>

<style>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';

#media {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 3px;
}

.icon a i {
  font-size: 32px;
  color: #000;
  border: 3px solid #000;
  border-radius: 100%;
  padding: 12px;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
}

.icon a i:hover {
  background-color: #d8d8d8;
}

@media (max-width: 570px) {
  .icon a i {
    font-size: 20px;
    padding: 10px;
  }

  .icon {
    margin-right: 5px;
  }

  .icon {
    min-width: 20%;
  }

  #media {
    justify-content: space-between;
  }
}

@media (max-width: 320px) {
  .icon a i {
    font-size: 18px;
    padding: 8px;
  }
}

@media (max-width: 220px) {
  .icon {
    margin: 5px;
  }
}
</style>
