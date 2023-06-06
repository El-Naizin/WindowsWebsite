<script setup>

import Window from '@/components/partials/Window.vue'

</script>

<script>



export default {
  components: {
    Window,
  },

  data() {

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    // this.getEventEntries();

    return {
      items : [],
      date_events : [],
      planning_date : `${year}/${month}/${day}`,
    }
  },
  async mounted() {

    let JsonData = {};

    fetch('/calendar_index.json')
      .then(response => response.json())
      .then(json => {
        JsonData = json;
        this.items = JsonData.Entries;

        let item;
        this.date_events = [];
        for(item in this.items){
          this.date_events.push(this.items[item].EventDate);
        }
      });

  },

  methods: {
    disableDays(date) {
      // Disable all days except for the ones in the events array
      return this.date_events.value.indexOf(date) === -1;
    },
    async getEventEntries() {
      let JsonData = {};

      const fetchPromise = await fetch('/calendar_index.json')
          .then(response => response.json())
          .then(json => {
            JsonData = json;
          });

      await Promise.all([fetchPromise]).then(() => {
        this.items = JsonData.Entries;

        let item;
        this.date_events = [];
        for (item in this.items) {
          this.date_events.push(JsonData.Entries[item].EventDate);
        }
      });

      console.log(this.date_events)
      return this.date_events;

    },
  },
}
</script>

<template>
  <Window title="Planning" help_btn help_popup="">
    <q-splitter
        style="height: 510px"
    >

<!--      TODO, BUTTONS IS FUCKED UP-->

      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
              v-model="this.planning_date"
              :no-unset="true"
              :disable-days="this.disableDays"
              :options="this.date_events"
              event-color="orange"
          />
        </div>
      </template>

      <template v-slot:after>

        <q-tab-panels
            v-model="this.planning_date"
            class="basePannel"

        >
          <q-tab-panel class="singularPannel" v-for="(item, index) in this.items" :name="item.EventDate">
            <div class="text-h4 q-mb-md">{{item.EventDate}}</div>
            <p>{{ item.Content }}</p>
          </q-tab-panel>

        </q-tab-panels>

      </template>

    </q-splitter>


  </Window>
</template>

<style scoped>

.q-date__calendar-item {
  color :red;

}

.basePannel{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-wrap: break-word;


}

.q-pa-md {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>