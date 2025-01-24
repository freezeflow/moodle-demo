<template>
    <div class="chatHeight flex flex-col">
        <div class="w-full flex flex-row pt-5 pl-5">
            <div class="flex justify-center">
                <button @click="$emit('closeWindow')" class="border border-red-600 w-6 h-6 rounded-full text-sm text-red-600"><font-awesome-icon icon="xmark" /></button>
            </div>
            <div class="w-full flex items-center justify-center">
                <p class="w-4/5 border border-x-0 border-t-0 text-lg text-center text-white">{{ ruser.name }} {{ ruser.surname }}</p>
            </div>
        </div>
        <div class="h-5/6 flex flex-col justify-between">
            <div class="pt-10 px-3 text-white h-5/6 overflow-y-auto">
                <div v-for="msg in messages" :key="msg.timestamp" class="mb-2">
                    
                    <p :class="{'text-right': msg.senderId === props.sid, 'text-left': msg.senderId === props.rid}" class="bg-blue-900 rounded p-2 flex flex-col">
                        <span class="max-md:text-sm">{{ msg.content }}</span>
                        <span class="text-gray-400 text-xs mt-2">{{ msg.timestamp }}</span>
                    </p>

                </div>
            </div>
            <div class="flex flex-row justify-end h-8 pr-4">
                <input type="text" v-model="message" class="border bg-transparent w-3/5 p-3">
                <button @click="sendMessage" class="w-10 h-8 rounded-r text-white bg-blue-950"><font-awesome-icon icon="paper-plane" /></button>
            </div>
            
        </div>
    </div>
    
</template>

<script setup>
    import { defineProps, ref, watch } from 'vue';
    import { useTeacherData } from '@/stores/teacherData';
    import { useStudentData } from '@/stores/studentData';
    import { useMessageData } from '@/stores/messageData';

    const teacherData = useTeacherData()
    const studentData = useStudentData()
    const messageStore = useMessageData();
    let message = ref()
    let ruser, suser
    let custom = 'flex flex-row px-5'

    const props = defineProps({
        rid: Number,
        sid: Number
    });

    defineEmits('closeWindow')

    ruser = teacherData.teachers.find(
    (teacher) => teacher.id === props.rid
    ) || studentData.students.find(
        (student) => student.id === props.rid
    );

    suser = teacherData.teachers.find(
        (teacher) => teacher.id === props.sid
    ) || studentData.students.find(
        (student) => student.id === props.sid
    );

    function sendMessage() {
        if (message.value.trim() === '') return; // Prevent empty messages

        const conversationId = messageStore.conversations.find(
            (conv) =>
                conv.participants.includes(props.sid) &&
                conv.participants.includes(props.rid)
        )?.conversationId;

        if (conversationId) {
            // Add to existing conversation
            messageStore.sendMessage(conversationId, props.sid, message.value);
        } else {
            // Create a new conversation if it doesn't exist
            const newConversation = messageStore.createConversation([props.sid, props.rid]);
            messageStore.sendMessage(newConversation.conversationId, props.sid, message.value);
        }

        message.value = ''; // Clear input after sending
    }

    const conversationId = messageStore.conversations.find(
        (conv) =>
            conv.participants.includes(props.sid) &&
            conv.participants.includes(props.rid)
    )?.conversationId;

    const messages = ref(
        conversationId
            ? messageStore.getMessages(conversationId)
            : []
    );

    watch(
        () => messageStore.conversations,
        () => {
            messages.value = conversationId
                ? messageStore.getMessages(conversationId)
                : [];
        }
    );

</script>