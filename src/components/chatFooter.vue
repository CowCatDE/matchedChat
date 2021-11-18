<template>
  <div id="chatFooter">
    <div class="container">
      <table style="width: 100%">
        <tr>
          <th>
            <textarea class="enteredMessage" v-model="enteredMessage"></textarea>
          </th>
          <th style="width: 6vh">
            <div class="submitButton" v-on:click="test(enteredMessage)"></div>
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "chatFooter",
  data(){
    return {
      enteredMessage:'2244',
    }
  },
  methods: {
    test(message){
        this.$emit("pass", message);
        this.enteredMessage = '';
    }
  }
}
</script>

<style scoped>
.submitButton{
  display: inline-block;
  width: 4.3vh;
  height: 4.3vh;
  border-radius: 50%;
  background-image: url("../assets/submit.png");
  background-size: cover;
  background-color: #28ff98;
  margin: auto;
  transition: all ease .3s;
}

.submitButton:hover{
  cursor: pointer;
}

.enteredMessage{
  display: inline-block;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  margin-left: 1vw;
  height: 5vh;
  outline:none;
  border-radius: 2vh;
  font-size: 1.5vh;
  width: 97.5%;
  resize:none;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1.5vh;
  color: white;
  overflow-x: hidden;
  border: none;
  transition: height .3s;
}

.enteredMessage:focus{
  height: 12vh;
}

.enteredMessage::-webkit-scrollbar {
  width: 12px;
}

.enteredMessage::-webkit-scrollbar-track {
  background: none;
}

.enteredMessage::-webkit-scrollbar-thumb {
  background-color: transparent;
  border-radius: 20px;
  border:none;
}
.container{
  width: 100%;
  height: 100%;
  background-color:transparent;
  justify-content: left;
  text-align: left;
}
</style>