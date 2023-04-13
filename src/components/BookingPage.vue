<template>
  <v-layout>
    <v-main :class="$style.main">
      <div :class="$style.central">
        <v-row>
          <v-card :class="$style.card1">
            <v-card-title>Please select your seat</v-card-title>

            <div :class="$style.seatlist">
              <p>Selected seats:</p>
              <p v-for="number in seatNumber" :key="number">{{ number }},</p>
            </div>

            <v-card-text>
              <FlightSeatmap v-on:setseatNumber="onSetSeatNumber" />
            </v-card-text>
          </v-card>

          <v-card :class="$style.card2">
            <v-card-title>Local Weather</v-card-title>
            <v-card-subtitle>Departure and Arrival Locations</v-card-subtitle>
            <v-card-text>
              <TempGauge />
            </v-card-text>
          </v-card>
        </v-row>
      </div>
    </v-main>
  </v-layout>
</template>

<script setup>
import FlightSeatmap from './FlightSeatmap.vue'
import TempGauge from './TempGauge.vue'
</script>

<script>
export default {
  name: 'BookingPage',

  components: {
    FlightSeatmap
  },
  data() {
    return {
      seatNumber: null
    }
  },
  methods: {
    onSetSeatNumber(seatNumber) {
      this.seatNumber = seatNumber
    }
  }
}
</script>

<style module>
.central {
  width: 900px;
  max-width: 95vw;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card1 {
  width: 400px;
  max-width: 95vw;
  height: 550px;
  margin: 80px auto;
}

.seatlist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 15px;
}
.seatlist p {
  padding-right: 5px;
}
.card2 {
  width: 400px;
  max-width: 95vw;
  height: 350px;
  margin: 80px auto;
}
.main {
  width: 100vw;
  min-height: 100vh;
  padding: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(241, 241, 241);
}
</style>
