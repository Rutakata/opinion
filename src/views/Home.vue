<script setup lang="ts">
    import { reactive } from 'vue';
    import PostInput from '../components/home/PostInput.vue';
    import Opinion from '../components/home/Opinion.vue';

    export type Opinion = {
        opinionText: string,
        date: Date,
        author: string,
        likes: string[],
        id: number
    };

    const latestOpinions = reactive<Map<number, Opinion>>(new Map());

    const addOpinion = (newOpinion: Opinion): void => {
        debugger;
        latestOpinions.set(newOpinion.id, newOpinion);
    };
    const updateLikesCounter = (opinionId: number, userId: string): void => {
        const opinion: Opinion | undefined = latestOpinions.get(opinionId);
        if (opinion) {
            if (!opinion.likes.includes(userId)) {
                opinion.likes.push(userId);
                latestOpinions.set(opinionId, opinion);
            } else {
                opinion.likes = []
                latestOpinions.set(opinionId, opinion);
            }
        }   
    }
</script>

<template>
    <PostInput placeholder="Write your opinion" :add-opinion="addOpinion" :opinion-id="latestOpinions.size" />
    <h2>Latest</h2>
    <section class="opinionsContainer">
        <div v-for="[key, opinion] in latestOpinions" class="opinionsContainer_opinion">
            <Opinion :opinion="opinion" :key="key" :update-likes-counter="updateLikesCounter" />
        </div>
    </section>
</template>

<style scoped>
    .opinionsContainer {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    .opinionsContainer_opinion {
        width: fit-content;
        max-width: 60vw;
        min-width: 10vw;
        min-height: 50px;
        background-color: #343434;
        border-radius: 10px 10px 10px 0;
        padding: 10px;
        color: #acacac;
    }
</style>