<script setup>

import Window from '@/components/partials/Window.vue'

</script>

<script>



export default {
  components: {
    Window,
  },

  data() {
    // this.getEventEntries();

    return {
      items : [],
      date_events : [],
      planning_date : ``,
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
        this.planning_date = this.date_events.reduce((latest, current) => {
          if (current > latest) {
            return current;
          }
          return latest;
        }, Object.values(this.date_events)[0]);

      });
  },

  methods: {
    disableDays(date) {
      // Disable all days except for the ones in the events array
      return this.date_events.value.indexOf(date) === -1;
    },
    //UNUSED
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

      return this.date_events;

    },
  },
}
</script>

<template>
  <Window title="Planning"  help_popup="" minimize_btn>
    <q-splitter
        :model-value=NaN
        horizontal
    >

      <template v-slot:before>

        <q-tab-panels
            v-model="planning_date"
            class="basePannel"

        >
          <q-tab-panel class="singularPannel" v-for="(item, index) in items" :name="item.EventDate">
            <div class="text-h4 q-mb-md">{{item.EventDate}}<br></div>
            <div> <p>{{ item.Content }}</p> </div>
          </q-tab-panel>

        </q-tab-panels>

      </template>

      <template v-slot:after>
        <div class="q-pa-md">
          <q-date
              v-model="planning_date"
              :no-unset="true"
              :disable-days="disableDays"
              :options="date_events"
              event-color="orange"
          />
        </div>
      </template>

    </q-splitter>


  </Window>
</template>
<style>
.q-date button {
  min-width: unset;
}
</style>

<style scoped>
.basePannel{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-wrap: break-word;
  overflow: hidden;
}

.singularPannel {
  display: flex;
  flex-direction: column; /* Set the flex direction to column */
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-wrap: break-word;
  overflow: hidden;
}

.q-pa-md {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>