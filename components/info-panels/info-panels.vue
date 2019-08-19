<template>
  <div class="panels">
    <div class="panel">
      <div class="panel__top"></div>
      <div class="panel__bottom">
        Panel 1 Information
      </div>
    </div>
    <div class="panel">
      <div class="panel__top"></div>
      <div class="panel__bottom">
        Panel 2 Information
      </div>
    </div>
    <div class="panel">
      <div class="panel__top"></div>
      <div class="panel__bottom">
        Panel 3 Information
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style>
  .panels {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 50em) {
    .panels {
      flex-direction: row;
    }
  }

  .panel {
    height: 200px;
    margin-bottom: 20px;
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 37.5em) {
    .panel {
      width: 70%;
    }
  }

  @media (min-width: 50em) {
    .panel {
      width: 30%;
    }
  }

  .panel__top {
    /*background-color: lightsteelblue;*/
    height: 100%;
    background-image: url('https://loremflickr.com/250/150/nature');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .panel__bottom {
    background-color: lightgray;
    padding: 10px;
  }

</style>
