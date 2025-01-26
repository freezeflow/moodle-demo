<template>
    <teacherNav class="fixed z-50"/>
    <div class="w-full h-screen flex flex-col justify-center items-center gap-10">
        <h2 class="text-2xl">Teacher settings</h2>
        <div class="flex flex-row max-md:flex-col gap-10 md:gap-24">
            <div @click="redirectTo('registerTeacher')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-48 h-48 max-md:w-36 max-md:h-36 rounded bg-blue-950 hover:bg-blue-600 transition-all flex justify-center items-center">
                    <div class="bg-white w-5/6 h-5/6 flex flex-col justify-center items-center text-7xl max-md:text-3xl rounded-lg">
                        <font-awesome-icon icon="user-plus" />
                    </div>
                </div>
            </div>

            <div @click="redirectTo('findTeacher')" class="flex flex-col justify-center items-center cursor-pointer">
                <div class="w-48 h-48 max-md:w-36 max-md:h-36 rounded bg-blue-950 hover:bg-blue-600 transition-all flex justify-center items-center">
                    <div class="bg-white w-5/6 h-5/6 flex justify-center items-center text-7xl max-md:text-3xl rounded-lg">
                        <font-awesome-icon icon="user-pen" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import teacherNav from '@/components/teacherComponents/teacherNav.vue';
    import { useRoute,useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    const id = Number(route.params.id);

    function redirectTo(link){
        router.push({name: link, params: {id}})
    }
</script>