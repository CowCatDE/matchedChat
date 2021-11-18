<template>
<div class="container">
  <img alt="Company Logo ChatList" :src="computeLogoLink(companyLogo)" class="companyLogo">
  <div>
    <div class="companyName">{{ companyName }}</div>
    <div class="jobDesc">für Job: {{ jobDesc }}</div>
    <div v-if="lastMessage.length>36" class="lastMessage">{{lastMessage.substring(0, 36) + "..."}}</div>
    <div v-else class="lastMessage">{{lastMessage}}</div>
  </div>
</div>
</template>

<script>

export default {
  name: "recentChat",
  props: {
    companyName: String,
    jobDesc: String,
    lastMessage: String,
    timestamp: String,
    companyLogo: String,
  },
  methods: {
    computeLogoLink(pic){
      return require('../assets/'+pic);
    }
  }
}

</script>

<style scoped>
.container{
  display: grid;
  width: 92%;
  height: 10vh;
  background-color: rgb(38, 56, 77);
  margin-left: 2vh;
  margin-right: 2vh;
  margin-top: 1vh;
  border-radius: 2vh;
  overflow: hidden;
  grid-template-columns: 0.3fr 2.4fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas:
    ". .";
}
.companyLogo{
  height: 10vh;
}
.companyName{
  text-align: left;
  margin-left: 1vw;
  margin-top: .7vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 2vh;
  color: white;
}

.jobDesc{
  text-align: left;
  margin-left: 1vw;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.5vh;
  color: #28ff98;
}

.lastMessage{
  text-align: left;
  margin-left: 1vw;
  margin-top: 1vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 1.7vh;
  color: white;
}


</style>