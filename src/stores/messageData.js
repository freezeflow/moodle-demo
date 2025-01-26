import { defineStore } from 'pinia';

export const useMessageData = defineStore('messageData', {
    state: () => {
        const savedData = JSON.parse(localStorage.getItem('messagesStore'));
        return {
          conversations: savedData?.conversations || [],
          lastConversationId: savedData?.lastConversationId || 0,
        };
    },
  actions: {
    sendMessage(conversationId, senderId, content) {
        const conversation = this.conversations.find(
          (conv) => conv.conversationId === conversationId
        );
      
        if (conversation) {
          conversation.messages.push({
            senderId,
            content,
            timestamp: new Date().toISOString(),
          });

          localStorage.setItem('messagesStore', JSON.stringify({
            conversations: this.conversations,
            lastConversationId: this.lastConversationId,
          }));
        }
    },
      
    createConversation(participants) {
        this.lastConversationId += 1;

        const newConversation = {
          conversationId: this.lastConversationId,
          participants,
          messages: [],
          createdAt: new Date().toISOString(),
        };
  
        this.conversations.push(newConversation);

        localStorage.setItem('messagesStore', JSON.stringify({
            conversations: this.conversations,
            lastConversationId: this.lastConversationId,
        }));
  
        return newConversation;
    },
    getMessages(conversationId) {
        const conversation = this.conversations.find(
          (conv) => conv.conversationId === conversationId
        );
        return conversation?.messages || [];
    }
  },
});
