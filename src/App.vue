
<template>
  <div id="app">
    <div class="containerApp">
      <chatList  @change="change"
                 :chat_partners="chat_partners"
                 :chat_messages="chat_messages">
      </chatList>
      <chat @pass="pass"
            :chat_partners="chat_partners"
            :chat_messages="chat_messages"
            :selected_Id="selected_Id">
      </chat>
    </div>
  </div>
</template>

<script>
import chatList from '@/components/chatList.vue';
import chat from "@/components/chat";

export default {
  name: 'App',
  data(){
    return {
      selected_Id: 1,
      chat_partners:[{
                      companyId: 1,
                      companyName: 'DEMV Systems',
                      companyLogo: 'demv.png',
                      partnerName: 'Martin',
                      jobDesc: 'Frontend Developer',
                    },{
                      companyId: 2,
                      companyName: 'Matched.IO',
                      companyLogo: 'matchedio.jpg',
                      partnerName: 'Charly',
                      jobDesc: 'Fullsteck Engineer',
                    },{
                      companyId: 3,
                      companyName: 'SDA SE',
                      companyLogo: 'SDA.jpg',
                      partnerName: 'Chris',
                      jobDesc: 'Senior Entwickler',
                    }],

      chat_messages:[{
                      companyId: 1,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ' +
                          'eirmod tempor invidunt ut labore et dolore magna aliquyamLorem ipsum dolor sit ' +
                          'amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ' +
                          'labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Martin',
                      senderId: 0,
                    },{
                      companyId: 3,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ' +
                          'eirmod tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Chris',
                      senderId: 0,
                    },{
                      companyId: 1,
                      message: 'Lorem ipsum dolor sit amet',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'DU',
                      senderId: 1,
                    },{
                      companyId: 1,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ' +
                          'eirmod tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'DU',
                      senderId: 1,
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ' +
                          'eirmod tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Charly',
                      senderId: 0
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Charly',
                      senderId: 0
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
                          'tempor invidunt ut labore et dolore magna aliquyamLorem ipsum dolor sit amet, consetetur ' +
                          'sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'DU',
                      senderId: 1
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Charly',
                      senderId: 0
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
                          'tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Charly',
                      senderId: 0
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'Charly',
                      senderId: 0
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod ' +
                          'tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'DU',
                      senderId: 1
                    },{
                      companyId: 2,
                      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed nonumy eirmod tempor' +
                          'invidunt ut labore et dolore magna aliquyamLorem ipsum dolor amet, consetetur sadipscing' +
                          'elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore aliquyamLorem ipsum' +
                          'dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ' +
                          'ut labore et dolore magna aliquyamLorem ipsum dolor sit amet, consetetur sadipscing ' +
                          'elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
                      timestamp: '11:34 22.11.2021',
                      partnerName: 'DU',
                      senderId: 1
                    }
      ]
    }
  },
  components: {
    chat,
    chatList,
  },
  methods:{
    pass(message){
      console.log(message)
      let x = String(message)
      if(x === ''){return;}
      let object = {companyId: this.selected_Id, message: x,timestamp: 'XX:XX XX.XX.XXXX', partnerName: 'DU', senderId: 1}
      this.chat_messages.push(object)
    },
    change(id){
      this.selected_Id = id;
      console.log(Date.now())
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;800&display=swap');
body {background-color: #212121;}
#app {
  font-family: "Montserrat",sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10vh;
}


.containerApp{
  display: grid;
  margin: auto;
  width: 70vw;
  height: 75vh;
  min-height: 75vh;
  max-height: 75vh;
  background-color: #2c3e50;
  grid-template-columns: 1fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0 0;
  grid-template-areas:
    ". .";
}
</style>
