<template>
  <main class="h-screen flex flex-col gap-5">
    <div v-if="screenMode === 'start' " :class="startScreenDivClass">
      <startscreen />
    </div>
    <div v-if="screenMode === 'loginOptions' ">
      <loginOptions />
      
    </div>
    
  </main>
</template>

<script setup>
import startscreen from "../components/start.vue";
import loginOptions from "../components/loginOption.vue";
import { ref } from "vue";

let screenMode = ref('start')
let opacity = ref('opacity-100')
let startScreenDivClass = `startdiv ${ opacity.value } transition-all h-screen flex flex-col gap-5 justify-center items-center`

function fade(setTimer = false, time = 0, opacityAmount){
  if (!setTimer) {
    opacity.value = `opacity-${opacityAmount}`
  }else if(setTimer){
    if(time > 0){
      setTimeout(() => {
        opacity.value = `opacity-${opacityAmount}`
        startScreenDivClass = `startdiv ${ opacity.value } transition-all h-screen flex flex-col gap-5 justify-center items-center`
      }, time);
    }else{
      console.log('Time not set')
    }
    
  }
}

function changeStartScreen(screenToChangeTo){
  if(screenToChangeTo){
    fade(true,3000,0)
    setTimeout(() => {
      screenMode.value = screenToChangeTo
    }, 3800);
  }
}

changeStartScreen('loginOptions')

</script>