<template>
    <div class="searchbar w-full flex justify-center ">
        <!-- <font-awesome-icon :icon="['fal', 'magnifying-glass']" style="color: #ffffff;" /> -->
        <input
        @keydown.enter="getsearchMovies"
        v-model="search"
        type="text"
        placeholder="Search for movies"
        class="text-white bg-customDarkPurple w-4/5 border-b-2 border-b-customBlack mt-10 mx-10"/>
        <button
        @click="getSearchMovies"
        class="text-white bg-customGray  hover:scale-95 border-b-2 border-b-customBlack mt-10 mx-10 rounded-full py-2 px-2">Search</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ''
        };
    },
    methods: {
        getSearchMovies() {
            this.$emit('search', this.search);
        }
    }
};
</script>

<style scoped>
</style>