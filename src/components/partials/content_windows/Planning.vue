<script setup>
import Window from '@/components/partials/Window.vue'

import {ref} from 'vue';

// TODO  Makes those dynamic
const splitterModel = ref(50);
const date = ref('2023/05/21');
const events = ref(['2023/05/21', '2023/05/22']);

const disableDays = (date) => {
  // Disable all days except for the ones in the events array
  return events.value.indexOf(date) === -1;
};

</script>

<script>

export default {
  components: {
    Window,
  },
  setup() {
    return {
      items: []
    }
  },
  created() {
    this.getEventEntries();
  },
  methods: {
    getEventEntries() {
      let JsonData = {};

       const fetchPromise = fetch('/calendar_index.json')
          .then(response => response.json())
          .then(json => {
            JsonData = json;
          });

      Promise.all([fetchPromise]).then(() => {
        this.items = JsonData.Entries;
      });
    },
  },
}
</script>

<template>
  <Window title="Planning" help_btn help_popup="">
    <q-splitter
        v-model="splitterModel"
        style="height: 510px"
    >

<!--      TODO, BUTTONS IS FUCKED UP-->

      <template v-slot:before>
        <div class="q-pa-md">
          <q-date
              v-model="date"
              :no-unset="true"
              :disable-days="disableDays"
              :options="  events"
              event-color="orange"
              class="planning-q-date"
          />
        </div>
      </template>

      <template v-slot:after>

          <q-tab-panels
              v-model="date"
              class="basePannel"
          >
            <q-tab-panel v-for="(item, index) in this.items" :name="item.EventDate">
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

}

.q-pa-md {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

</style>