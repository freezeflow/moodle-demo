<template>
    <div class="w-full h-full gap-3 flex flex-col justify-center items-center">
        <div class="w-32 h-32 flex justify-center items-center rounded-lg bg-slate-200"><font-awesome-icon icon="user" class="text-3xl" /></div>
        <div class="flex flex-col gap-3 text-center text-white">
            <p class="text-2xl">{{ parentInfo.surname }} {{ parentInfo.name }} </p>
            <p><span class="font-bold">Email:</span> {{ parentInfo.email }}</p>
            <p><span class="font-bold">Mobile Number:</span> {{ parentInfo.mobileNum }}</p>
            <p><span class="font-bold">Password:</span> {{ parentInfo.password }}</p>
            <button class="w-full border" @click="toEdit">Edit</button>
        </div>
    </div>
</template>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { useParentData } from '@/stores/parentsData';
    import { computed } from 'vue';

    const route = useRoute();
    const router = useRouter();
    const parentData = useParentData()
    const id = Number(route.params.id);

    const parentInfo = computed(() => {
        return parentData.parents.find(parent => parent.id === id);
    });

    function toEdit(){
        router.push({ name: 'editParentProfile', params: { id } });
    }
</script>