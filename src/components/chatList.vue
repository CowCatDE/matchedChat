<template>
  <div id="chats">

    <div v-for="item in chat_partners" :key="item.companyId">
      <div class="chatListItem" v-on:click="changeChatID(item.companyId)">
        <chatListItem :company-logo="item.companyLogo"
                      :company-name="item.companyName"
                      :job-desc="item.jobDesc"
                      :lastMessage="getLastMessage(item.companyId)"></chatListItem>
      </div>
    </div>
  </div>

</template>

<script>
import chatListItem from './chatListItem.vue'

export default {
  name: 'matched_chat',
  selected_id: 0,
  components:{ chatListItem },
  props:{
    chat_partners: Array,
    chat_messages: Array,
  },
  methods:{
    changeChatID(id){
      this.$emit("change", id);
    },
    getLastMessage(id){
      for (let i = this.chat_messages.length - 1; i >= 0; i--) {
        if(this.chat_messages[i].companyId === id){
          return this.chat_messages[i].message;
        }
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chats{
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: rgb(25, 37, 52);
}

.chatListItem{
  cursor: pointer;
  transition: all ease .1s;
}

.chatListItem:active{
  transform: scale(0.98);
}
</style>
