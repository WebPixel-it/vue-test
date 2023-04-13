<template>
  <v-main :class="$style.main">
    <div :class="$style.central">
      <v-card color="#f1f1f1" :class="$style.cardSeats">
        <v-card-title>Please select your seat</v-card-title>
        <div :class="$style.seatlist">
          <p>Selected seats:</p>
          <p v-for="number in seatNumber" :key="number">{{ number }},</p>
        </div>
        <v-card-subtitle>Hover map to scroll and drag</v-card-subtitle>
        <v-card-text>
          <FlightSeatmap v-on:setseatNumber="onSetSeatNumber" />
        </v-card-text>
      </v-card>
      <div :class="$style.cardBooking">
        <v-card color="#f1f1f1" v-if="seatNumber && seatNumber.length">
          <v-card-title>Passenger Information</v-card-title>
          <v-card-text>
            <v-form v-for="number in seatNumber" :key="number" :class="$style.bookingInput">
              <p>Seat {{ number }}</p>
              <v-text-field
                :class="$style.space"
                variant="outlined"
                density="compact"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                variant="outlined"
                density="compact"
                label="Last name"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>

        <v-card color="#f1f1f1" v-if="!(seatNumber && seatNumber.length)" :class="$style.cardMeteo">
          <v-card-title>Local Weather</v-card-title>
          <v-card-subtitle>Departure and Arrival Locations</v-card-subtitle>
          <v-card-text>
            <TempGauge />
          </v-card-text>
          <v-divider></v-divider>
          <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-weather-windy">
              <v-list-item-subtitle>23 km/h</v-list-item-subtitle>
            </v-list-item>
            <v-card-text> Milano </v-card-text>
            <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
              <v-list-item-subtitle>48%</v-list-item-subtitle>
            </v-list-item>
          </div>
          <v-divider></v-divider>
          <div class="d-flex py-3 justify-space-between">
            <v-list-item density="compact" prepend-icon="mdi-thermometer-alert">
              <v-list-item-subtitle>18 km/h</v-list-item-subtitle>
            </v-list-item>
            <v-card-text> Athens </v-card-text>
            <v-list-item density="compact" prepend-icon="mdi-white-balance-sunny">
              <v-list-item-subtitle>78%</v-list-item-subtitle>
            </v-list-item>
          </div>
        </v-card>
      </div>
    </div>
  </v-main>
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
  width: 850px;
  max-width: 95vw;
  margin: 100px auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cardSeats {
  width: 400px;
  max-width: 95vw;
  height: 550px;
}

.space {
  margin-right: 5px;
}
.seatlist {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 8px 15px;
  color: #05724e;
}
.seatlist p {
  padding: 0 5px 0 0;
  line-height: 16px;
  font-size: 15px;
  font-weight: bold;
}
.cardMeteo {
  width: 400px;
  max-width: 95vw;
  height: 100%;
  overflow: hidden;
}
.cardBooking {
  width: 400px;
  max-width: 95vw;
  height: 100%;
  max-height: 530px;
  overflow-y: auto;
}

.bookingInput {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.bookingInput p {
  padding: 0 5px 20px 0;
  line-height: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #05724e;
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

@media only screen and (max-width: 900px) {
  .main {
    background: rgb(241, 241, 241);
    padding: 0px;
    margin-top: 20px;
  }
  .central {
    border-radius: 20px;
    background: #f1f1f1;
    box-shadow: inset 5px 5px 11px #e0e0e0, inset -5px -5px 11px #ffffff;
    padding: 30px 0;
    margin: 0px;
    width: 500px;
    flex-direction: column;
  }
  .cardBooking {
    max-height: none;
    overflow-y: visible;
  }
  .cardSeats {
    margin: 10px auto;
  }
  .cardBooking {
    margin: 10px auto;
  }
  .cardMeteo {
    margin: 10px auto;
  }
}

@media only screen and (min-width: 900px) {
  .central {
    border-radius: 15px;
    background: #f1f1f1;
    box-shadow: inset 5px 5px 11px #e0e0e0, inset -5px -5px 11px #ffffff;
    padding: 20px;
    flex-direction: row;
  }
  .cardSeats {
    display: flex-start;
    min-width: 400px;
  }
  .cardBooking {
    display: flex-start;
    margin: 0 20px 0 20px;
    min-width: 400px;
  }
  .cardMeteo {
    display: flex-start;
    min-width: 400px;
  }
}
@media only screen and (max-width: 600px) {
  .main {
    background: #d3d2d2;
  }
  .central {
    border-radius: none;
    background: #d3d2d2;
    box-shadow: none;
    padding: 0;
    margin: 0px;
    flex-direction: column;
  }
  .cardBooking {
    width: 400px;
    max-width: 95vw;
    height: 100%;
    max-height: none;
    overflow-y: visible;
  }
}
</style>
