<script setup lang="ts">
</script>

<template>
    <div class="header">
        <span class="header_title">Opinion</span>
        <nav class="header_navigation">
            <div class="header_navigation__item">
                <router-link to="/" class="header_navigation__item__link">Home</router-link>    
            </div>
            <div class="header_navigation__item">
                <router-link to="/hot" class="header_navigation__item__link">Hot</router-link>
            </div>
            <div class="header_navigation__item">
                <router-link to="/me" class="header_navigation__item__link">Profile</router-link>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .header {
        height: 80px;    
        background-color: #343434;
        color: #fff;
        margin: 0;
        padding: 10px 30px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-basis: auto;
        box-shadow: 0 4px 10px rgb(61, 61, 61);
    }
    .header_title {
        font-size: 40px;
        font-weight: 600;
    }
    .header_navigation {
        display: flex;
        justify-content:space-around;
    }
    .header_navigation__item{
        display: inline-block;
        font-size: 20px;
        width: 80px;
        text-align: center;
    }
    .header_navigation__item__link {
        text-decoration: none;
        color: inherit;
    }
    .header_navigation__item__link:active {
        color: grey;
    }
</style>