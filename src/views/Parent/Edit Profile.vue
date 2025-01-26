<template>
    <back 
    :link="'parentDashboard'"
    :id="id"
    class="fixed top-3 left-3"/>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-2">
        <div class="flex flex-col justify-center items-center gap-1">
            <h1 class="text-xl">Edit profile</h1>
            <error 
            :error-message="errorMsg"
            v-if="errorMsg"/>
            <successMessage 
            :success-message="successMsg"
            v-if="successMsg"/>
        </div>
        
        <form action="" @submit.prevent class="w-2/5 flex flex-col gap-3">
            <div class="w-full flex flex-col">
                <label for="">Name:</label>
                <input type="text" class="border border-blue-600 rounded p-1" v-model="form.name">
            </div>
            <div class="w-full flex flex-col">
                <label for="">Surname:</label>
                <input type="text" class="border border-blue-600 rounded p-1" v-model="form.surname">
            </div>
            <div class="w-full flex flex-col">
                <label for="">Email:</label>
                <input type="text" class="border border-blue-600 rounded p-1" v-model="form.email">
            </div>
            <div class="w-full flex flex-col">
                <label for="">Mobile number:</label>
                <input type="text" class="border border-blue-600 rounded p-1" v-model="form.contact">
            </div>
            <div class="w-full flex flex-col">
                <label for="">New password:</label>
                <div class="flex flex-row w-full">
                    <input v-model="form.newpass" class="border border-blue-600 rounded-l w-full p-1" :type="newPassType" name="">
                    <button class="w-8 bg-blue-600 rounded-r" @click="toggleNewPass"><font-awesome-icon :icon="newPassIcon" /></button>
                </div>
            </div>
            <div class="w-full flex flex-col">
                <label for="">Old password:</label>
                <div class="flex flex-row">
                    <input v-model="form.oldpass" class="border border-blue-600 rounded-l w-full p-1" :type="oldPassType" name="">
                    <button class="w-8 bg-blue-600 rounded-r" @click="toggleOldPass"><font-awesome-icon :icon="oldPassIcon" /></button>
                </div>
            </div>
            <button class="w-full h-8 bg-blue-600 text-white rounded" @click="handleSubmit">Confirm changes</button>
            <button class="w-full h-8 bg-blue-950 text-white rounded">Delete profile</button>
        </form>
        
    </div>
</template>

<script setup>
    import back from '@/components/parentComponent/back.vue';
    import error from '@/components/messages/error.vue';
    import successMessage from '@/components/messages/successMessage.vue';
    import { useParentData } from '@/stores/parentsData';
    import { formUtilities } from '@/utils/formUtilities';
    import { useRoute, useRouter } from 'vue-router';
    import { ref,computed, reactive } from 'vue';

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);
    const parentData = useParentData()
    const parent = computed(() => {
        return parentData.parents.find(parent => parent.id === id);
    });
    const form = reactive({
        name: parent.value?.name || '',
        surname: parent.value?.surname || '',
        email: parent.value?.email || '',
        contact: parent.value?.mobileNum || '',
        newpass: '',
        oldpass: '',
        uploadDate: new Date().toLocaleString() || '',
    })

    let newPassIcon = ref('eye-slash')
    let newPassType = ref('password')
    let oldPassIcon = ref('eye-slash')
    let oldPassType = ref('password')
    let errorMsg = ref()
    let successMsg = ref()
    
    function toggleOldPass(){
        if(oldPassIcon.value === 'eye-slash' && oldPassType.value === 'password'){
            oldPassIcon.value = 'eye'
            oldPassType.value = 'text'
        }else{
            oldPassIcon.value = 'eye-slash'
            oldPassType.value = 'password'
        }
    }

    function toggleNewPass(){
        if(newPassIcon.value === 'eye-slash' && newPassType.value === 'password'){
            newPassIcon.value = 'eye'
            newPassType.value = 'text'
        }else{
            newPassIcon.value = 'eye-slash'
            newPassType.value = 'password'
        }
    }

    function handleSubmit(){
        if(formUtilities.checkEmptyFields(form.oldpass)){
            errorMsg.value = 'Please enter your current password'
            return
        }

        if(form.oldpass !== parent.value.password){
            errorMsg.value = 'Incorrect password'
            console.log(parent.value.password)
            return
        }

        if(form.newpass === ''){
            form.newpass = parent.value.password
        }

        errorMsg.value = ''
        successMsg.value = 'Changes successfully saved'
        parentData.updateParent(id, form.name, form.surname, form.email, form.contact, form.newpass)
    }
</script>