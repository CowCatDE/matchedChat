<template>
  <div id="chatMain" style="overflow-x: hidden">
    <p>Ihr habt ein erfolgreiches Match!</p>
    <transition-group name="slide-fade">
      <div v-for="item in chat_messages" :key="item">
        <chat-messages :message="item.message"
                       :senderId="item.senderId"
                       :timestamp="item.timestamp"
                       :chat-partner="item.partnerName">
        </chat-messages>
      </div>
      </transition-group>
  </div>
</template>

<script>

import chatMessages from "./chatMessage"
export default {

  name: "chatMain",
  props: {
    chatId: Number,
    chat_messages: Array,
  },
  components: {chatMessages},

}
</script>
<style scoped>
p {
  color: white;
}
#chatMain{
  overflow: auto;
  max-height: 60vh;
  transition: all ease .3s;
  min-height: 2vh;
}


#chatMain::-webkit-scrollbar {
  width: .5vh;
}

#chatMain::-webkit-scrollbar-track {
  background: none;
}

#chatMain::-webkit-scrollbar-thumb {
  background-color: #28ff98;
  border-radius: 4vh;
  border:none;
}
</style>