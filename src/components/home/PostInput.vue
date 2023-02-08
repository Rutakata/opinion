<script setup lang="ts">
    import { ref, computed } from 'vue';
    import { Opinion } from '../../views/Home.vue';

    const props = defineProps<{
        placeholder: string, 
        addOpinion: (newOpinion: Opinion) => void,
        opinionId: number,
    }>();

    const newOpinionText = ref<string>('');

    const newComputedOpinion = computed(():Opinion => {return {
        opinionText: newOpinionText.value, 
        date: new Date(), 
        author: 'Admin',
        likes: [],
        id: props.opinionId * Math.random()
    }}); 
</script>

<template>
    <div class="newPost">
        <textarea v-model="newOpinionText" :placeholder="placeholder" class="newPost_postInput"></textarea>
        <div class="newPost_buttonsBlock">
            <button class="newPost_button newPost_postButton" 
                @click="() => {addOpinion(newComputedOpinion);newOpinionText = '';}">
                Post
            </button>
            <button class="newPost_button newPost_editButton">Settings</button>
        </div>
    </div>
</template>

<style scoped>
    .newPost {
        display: flex;
    }
    .newPost_buttonsBlock {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .newPost_button {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        background-color: #343434;
        border: none;
        color: #fff;
        font-size: 20px;
    }
    .newPost_button:hover {
        background-color: #575757;
    }
    .newPost_postInput {
        display: block;
        width: 30vw;
        height: 80px;
        border-radius: 10px;
        border: 2px solid #fff;
        font-family: 'Roboto', 'Verdana', sans-serif;
        font-size: 18px;
        color: #fff;
        resize: none;
        padding: 10px;
        background-color: inherit;
        margin-right: 20px;
    }
    .newPost_postInput::placeholder {
        color: #fff;
        font-family: inherit;
    }
    .newPost_postInput:focus {
        outline: none;
        border: 2px solid rgb(192, 192, 192);
    }
</style>