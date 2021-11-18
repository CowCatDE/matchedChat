<template>
  <div>
    <div id="chat">
      <chatHeader :jobDesc="getJobDesc()"
                  :company-logo="getImage(selected_Id)"
                  :company-name="this.chat_partners[chatArrayId].companyName">
      </chatHeader>

      <chatMain :chat_messages="filteredMessages"
                :chat-id="selected_Id">
      </chatMain>

      <chatFooter @pass="pass"></chatFooter>

    </div>
  </div>
</template>

<script>
import chatHeader from "@/components/chatHeader"
import chatFooter from "@/components/chatFooter"
import chatMain from "@/components/chatMain"
export default {
  name: "chat",
  components: {chatHeader, chatFooter, chatMain},

  props: {
    selected_Id: Number,
    chat_partners: Array,
    chat_messages: Array,
  },
  data(){
    return {
        chatArrayId: 0,
        filteredMessages: [{}],
        jobDesc:'',
          }
  },
  watch:{
    chat_messages: function() {
      this.getMessages(this.chat_messages, this.selected_Id)
    },
    selected_Id: function() {
      this.getMessages(this.chat_messages, this.selected_Id)
    }
  },
  mounted(){
    this.getMessages(this.chat_messages,this.selected_Id);
  },
  methods:{
    getImage(id){
      let xy = this;
      for (let i = 0; i < this.chat_partners.length; i++) {
        if (this.chat_partners[i].companyId === id){
          xy.chatArrayId = i;
          return this.chat_partners[i].companyLogo;
        }
      }
    },
    getMessages(chat_messagess, chatID) {
      this.filteredMessages = [{}];
      this.filteredMessages = this.chat_messages.filter(v => v.companyId === chatID);
    },
    getJobDesc(){
      return this.chat_partners[this.chatArrayId].jobDesc;
    },
    pass(message){
      this.$emit("pass", message);
    }
  }

}

</script>

<style scoped>
#chat{
  display: grid;
  width: 100%;
  height: 100%;
  max-height: 75vh;
  background-color: rgb(38, 56, 77);
  grid-template-columns: 2.4fr;
  grid-template-rows: 0.4fr 2.5fr 0.5fr;
  gap: 0 0;
  grid-template-areas:
    "."
    "."
    ".";
}
</style>