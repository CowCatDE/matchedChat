<template>
    <div>
      <div v-if="senderId === 0">
         <div class="partnerMessage">
           <div class="name">{{chatPartner}}<span class="timestamp">{{timestamp}}</span><br></div>
           {{message}}
         </div>
      </div>
      <div v-else>
          <div class="selfMessage">
            <div class="name">{{chatPartner}}<span class="timestamp">{{timestamp}}</span><br></div>
            {{message}}
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "chatMessage",
  props:{
    message: String,
    chatPartner: String,
    timestamp: String,
    senderId: Number,
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.timestamp{
  font-family: "Montserrat", sans-serif !important;
  font-weight: 300;
  font-size: 1.2vh;
  float: right;
  margin-top: .25vh;
  color: rgba(255,255,255,.3);
}
.name{
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-bottom: 1vh;
  font-size: 1.7vh;
  color: #28ff98;
}
.partnerMessage{
  display: block;
  padding: 1vh;
  margin-left: 1vh;
  margin-top: 1.5vh;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: left;
  width: auto;
  max-width: 50vh;
  border-radius: 2vh 2vh 2vh 0;
  font-size: 1.6vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
.selfMessage{
  display: block;
  padding: 1vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  margin-top: 1.5vh;
  width:auto;
  max-width: 50vh;
  text-align: left;
  margin-left: auto;
  margin-right: 1vh;
  border-radius: 2vh 2vh 0 2vh;
  font-size: 1.6vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}
</style>