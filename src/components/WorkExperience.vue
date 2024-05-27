<template>
  <section>
    <h4 class="title">Work experience {{ monthsBetween('2021-01-01') }}</h4>

    <q-timeline color="secondary">
      <q-timeline-entry title="Frontend developer" subtitle="November 2023 - present">
        <p><b>Company:</b> <a href="https://lab365.ru/" target="_blank">Laboratory 365</a>.</p>
        <p>
          <b>Description:</b> Development of a task tracker with microservice architecture and its
          own UI-library. In the same application we track our own tasks. Among interesting things,
          I developed a Gantt diagram from scratch. I take an active part in the development of the
          team and the project.
        </p>
        <p><b>Stack:</b> Vue3, Typescript, VueUse, Pinia, Axios, Vite, Rollup, Storybook, Node.js.</p>
        <p><b>Architecture:</b> Future Sliced Design + microservices.</p>
        <p><b>Team:</b> 16 people.</p>
      </q-timeline-entry>

      <q-timeline-entry title="Lead Frontend developer" subtitle="November 2022 - November 2023">
        <b>Company:</b> <a href="https://nidgedev.kz/" target="_blank">Nidge</a>.
        <p><b>Projects:</b></p>
        <p>
          - Aiplus-mobile: Developed CRM system of "Aiplus" education center for mobile devices.
          Build to store is done with capacitor + ionic. Worked with legacy code.
          <br />Stack: Angular, Ionic, Capacitor, SCSS. <br />Team: 4 people.
        </p>
        <p>
          - Aiplus-web: Developed from scratch the Aiplus Education Center desktop application with
          admin panel.
          <br />Stack: Vue3, Typescript, Vuetify, Pinia, SCSS. <br />Team: 4 people.
        </p>
      </q-timeline-entry>

      <q-timeline-entry title="Frontend developer" subtitle="October 2021 - November 2022">
        <b>Company:</b> <a href="https://nidgedev.kz/" target="_blank">Nidge</a>.
        <p><b>Projects:</b></p>
        <p>
          - Halyk Bank Insurances: Built from scratch insurance website for Kazakh Bank + mobile
          application.
          <br />Stack: Vue3, Nuxt3, Pinia, Vite, SCSS/CSS in JS, Storybook. <br />Architecture:
          Future Sliced Design + Atom Design. <br />Team: 10 people.
        </p>
        <p>
          - Tex Taxi: Development of admin panel for taxi park.
          <br />Stack: Vue2, Vuex, SCSS, Craftable. <br />Team: 6 people.
        </p>
      </q-timeline-entry>

      <q-timeline-entry title="Frontend developer" subtitle="March 2021 - October 2021">
        <p><b>Company:</b> TotalBattle (startup).</p>
        <p>
          <b>Description:</b> Developed an application for users of an online browser game. The app,
          with the help of a virtual robot, helped users automate routine tasks in the game while
          they could do other things.
        </p>
        <p><b>Stack:</b> Vue3, Typescript, SCSS, Vite.</p>
        <p><b>Team:</b> 2 people.</p>
      </q-timeline-entry>

      <q-timeline-entry title="Frontend developer (intern)" subtitle="January 2021 - March 2021">
        <p><b>Company:</b> <a href="https://napoleonit.ru/" target="_blank">Napoleon IT</a>.</p>
      </q-timeline-entry>
    </q-timeline>
  </section>
</template>

<script setup lang="ts">
const monthsBetween = (date: string) => {
  const startDate = new Date(date)
  const endDate = new Date()

  const startYear = startDate.getFullYear()
  const startMonth = startDate.getMonth()
  const endYear = endDate.getFullYear()
  const endMonth = endDate.getMonth()

  let months = (endYear - startYear) * 12

  months += endMonth - startMonth

  return `(${Math.floor(months / 12)} years, ${months % 12} months)`
}
</script>

<style scoped lang="scss">
p {
  text-align: justify;
}
</style>
