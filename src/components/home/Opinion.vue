<script setup lang="ts">
    import { Opinion } from '../../views/Home.vue'; 

    defineProps<{
        opinion: Opinion,
        updateLikesCounter: (opinionId: number, userId: string) => void,
    }>();
</script>

<template>
    <h3 class="container_opinionAuthor">{{ opinion.author }}</h3>
    <p class="container_opinionText">{{ opinion.opinionText }}</p>
    <div class="container_opinionDetails">
        <div class="container_opinionDetails_likesContainer">
            <span class="material-symbols-outlined" @click="updateLikesCounter(opinion.id, 'U001')">favorite</span>
            <span class="container_opinionDetails__likes">{{ opinion.likes.length }}</span>
        </div>
        <span class="container_opinionDetails__date">{{ opinion.date.getFullYear() }}</span>
    </div>
</template>

<style scoped>
    .container_opinionAuthor {
        margin-top: 0;
    }
    .container_opinionText {
        color: #fff;
        white-space: initial;
        word-wrap: break-word;
    }
    .container_opinionDetails {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .container_opinionDetails_likesContainer {
        display: flex;
        align-items: center;
        gap: 5px;
    }
</style>