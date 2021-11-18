<template>
  <div>
    <div id="containerHeader" :style="[infoToggled ? {'height': '25vh'} : {'height': '9.5vh'}]">
      <table style="margin-top: .5vh;">
        <tr>
          <th>
          <div class="companyLogo dd">
            <img alt="Company Logo" class="companyLogo" :src="computeLogoLink(companyLogo)">
          </div>
          </th>
          <th style="width: 68%">
            <div class="companyName">{{companyName}}<br>
               <div class="infoLogo" v-on:click="toggleInfoByIds()"></div>
               <a class="companyLocation" v-bind:href="'https://www.google.com/maps/place/matched.io/@53.5448655,9.' +
                '9898763,17z/data=!3m1!4b1!4m5!3m4!1s0x47b18f202bce86d5:0x6678cc5117bcfe0c!8m2!3d53.5448623!4d9.99' +
                 '20703'">
                 <table>
                   <tr>
                     <th>
                        <img alt="Location Icon"
                             src="../assets/location2.png"
                             style="height: 2.5vh; width: 2.5vh;display: inline-block; transform: translateY(-17%)">
                     </th>
                     <th>
                       <div class="link">Standort</div>
                     </th>
                   </tr>
                 </table>
               </a>
            </div>
          </th>
          <th>
            <a class="hiredButton">
              <span>&nbsp;&nbsp;Eingestellt!&#127881; </span>
            </a>
          </th>
        </tr>
      </table>
      <div class="infoContainer">
        <div class="companyInfoContainer">
          <img alt="Company Logo Header" class="logoContainer" :src="computeLogoLink(companyLogo)">
          <div>
            <div class="nameContainer">
              <span style="border-bottom: solid .2vh #28ff98;">{{ companyName }}</span><br>
            </div>
            <div class="companyInfo">
              <table>
                <tr style="transform: translateX(.08vw)">
                  <th>
                    <font-awesome-icon style="font-size: 1.6vh" icon="globe"/>
                  </th>
                  <th>
                    <a href="https://matched.io" style="text-decoration: none">demv.com</a>
                  </th>
                </tr>
                <tr>
                  <th>
                    <font-awesome-icon style="font-size: 1.6vh" icon="users"/>
                  </th>
                  <th>
                    <span>&nbsp;234</span>
                  </th>
                </tr>
                <tr>
                  <th style="transform: translateX(.15vw)">
                    <font-awesome-icon style="font-size: 1.6vh" icon="map-marker-alt"/>
                  </th>
                  <th>
                    <span>Hamburg</span>
                  </th>
                </tr>
                <tr style="transform: translateX(.08vw)">
                  <th>
                    <font-awesome-icon style="font-size: 1.6vh" icon="folder"/>
                  </th>
                  <th>
                    <span>Finanzen und Dienstleistungen</span>
                  </th>
                </tr>
              </table>
            </div>
          </div>
          <div style="margin-top: 1vh">
            <a href="#">
              <img alt="Github Link Logo"
                   src="../assets/github-brands.png"
                   style="height: 3vh; color: white; margin-left: -1vh"><br>
            </a>
            <a href="#">
              <img alt="LinkedIn Link Logo"
                   src="../assets/linkedin-brands.png"
                   style="height: 3vh; color: white; margin-left: -1vh; margin-top: .5vh"><br>
            </a>
            <a href="#">
              <img alt="Xing Link Logo"
                   src="../assets/xing-brands.png"
                   style="height: 3vh; color: white; margin-left: -1vh; margin-top: .5vh">
            </a>
          </div>
        </div>
        <div class="jobInfoContainer">
          <div>
          </div>
          <div>
            <div class="nameContainer">
              <span style="border-bottom: solid .2vh #28ff98;">{{ jobDesc }}</span><br>
            </div>
            <div class="jobInfo">
              <table>
                <tr>
                  <th>
                    <span>Festanstellung</span>
                  </th>
                  <th style="transform: translateX(0vw)">
                    <font-awesome-icon style="font-size: 1.6vh"
                                       icon="clock"/>
                  </th>
                </tr>
                <tr>
                  <th>
                    <span>&nbsp;Remote, Non-Remote</span>
                  </th>
                  <th style="transform: translateX(.1vw)">
                    <font-awesome-icon style="font-size: 1.6vh" icon="laptop-house"/>
                  </th>
                </tr>
                <tr style="transform: translateX(.08vw)">
                  <th>
                    <span>12.000€ - 24.000€</span>
                  </th>
                  <th>
                    <font-awesome-icon style="font-size: 1.6vh" icon="money-bill-wave-alt"/>
                  </th>
                </tr>
                <tr style="transform: translateX(.08vw)">
                  <th>
                    <span>vue.js, JS, React, Angular, Flutter</span>
                  </th>
                  <th style="transform: translateX(-.15vw)">
                    <font-awesome-icon style="font-size: 1.6vh" icon="code-branch"/>
                  </th>
                </tr>
              </table>
              </div>
          </div>
            <img alt="Developer avatar" class="logoContainer" src="../assets/developer2.png">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "chatHeader",
  props: {
    companyLogo: String,
    companyName: String,
    jobDesc: String,
    companyId: String,
  },
  data(){
    return {
      infoToggled: false,
    }
  },
  methods: {
    computeLogoLink(pic){
      return require('../assets/'+pic);
    },
    toggleInfoByIds: function () {
      this.infoToggled= !this.infoToggled;

      //const container = document.getElementById('containerHeader');
      //container.classList.toggle("expand");
      console.log(2)
    },
  }
}
</script>

<style scoped>
.hiredButton{
  display: block;
  float: right;
  color: white;
  border-bottom: solid .3vh #28ff98;
  letter-spacing: .2vh;
  transition: all ease .2s;
  cursor: pointer;
}

.hiredButton:hover{
  border-bottom: solid .5vh #28ff98;

}

.companyInfoContainer{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.3fr 1.5fr 0.3fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0 0;
  grid-template-areas:
    ". . ."
    ". . .";
  width: 95%;
  height: 13vh;
  background-color: #2c3e50;
  margin: 1vh;
  border-radius: 1vh;
  overflow: hidden;
}

.companyInfoContainer .logoContainer{
  display: block;
  width: 7vh;
  height:7vh;
  opacity: 1;
  border-radius: 50% 50% 50% 50%;
  transform: translateX(.5vh) translateY(3.5vh);
}

.companyInfoContainer .companyInfo{
  display: block;
  text-align: left;
  color: white;
  font-size: .8rem;
  margin-top: .5vh;
  margin-left: 1vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}

.companyInfoContainer .nameContainer{
  display: block;
  text-align: left;
  color: white;
  font-size: 1rem;
  margin-top: .7vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
}

.jobInfoContainer{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 0.3fr 1.2fr 0.3fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0 0;
  grid-template-areas:
    ". . ."
    ". . .";
  width: 95%;
  height: 13vh;
  background-color: #2c3e50;
  margin: 1vh;
  border-radius: 1vh;
  overflow: hidden;
}

.jobInfoContainer .nameContainer{
  display: block;
  text-align: right;
  color: white;
  font-size: 1rem;
  margin-top: .7vh;
  margin-right: .8vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
}

.jobInfoContainer .logoContainer{
  display: block;
  width: 7vh;
  height:7vh;
  border-radius: 50% 50% 50% 50%;
  transform: translateX(-.5vh) translateY(3.5vh);
  text-align: right;
}

.jobInfoContainer .jobInfo{
  display: block;
  text-align: right;
  color: white;
  font-size: .8rem;
  margin-top: .5vh;
  margin-left: 1vh;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}

.infoContainer{
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0 0;
  width: 100%;
  height: 15vh;
  margin-top: .5vh;
}

.infoLogo{
  display: inline-block;
  width: 3vh;
  height: 3vh;
  background-color: #28ff98;
  border-radius: 2vh;
  cursor: pointer;
  background-image: url("../assets/info.png");
  background-size:cover;

}
a:visited {
  color: white;
}

.companyLocation{
  display: inline-block;
  width: 11vh;
  height: 3vh;
  background-color: #28ff98;
  border-radius: 2vh;
  cursor: pointer;
  margin-left: .8vh;
  text-decoration: none;
}

.companyLocation .link{
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 1.4vh;
  text-decoration: none;
  color: black !important;
  transform: translateY(-.6vh);

}

.expand{
  height: 20vh !important;
  transition: all ease .3s
}

#containerHeader{
  width: 100%;
  background-color: rgba(0,0,0,.5);
  transition: all ease .3s;
  overflow: hidden;
}


.companyLogo{
  display: block;
  height: 7vh;
  border-radius: 50%;
  margin: .5vh;
  margin-left: 1vh
}

.companyName {
  margin-top: 0;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 3vh;
  color:white;
  width: 100%;
}
</style>