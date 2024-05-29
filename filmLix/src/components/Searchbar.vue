<template>
    <div class="searchbar w-full flex justify-center ">
        <!-- <font-awesome-icon :icon="['fal', 'magnifying-glass']" style="color: #ffffff;" /> -->
        <input
        @keydown.enter="getsearchMovies"
        v-model="search"
        type="text"
        placeholder="Search for movies"
        class="text-customWhite bg-customDarkPurple w-[60%] border-b border-b-customWhite mt-10 mx-10"/>
        <button
        @click="getSearchMovies"
        class="text-white bg-customGray  hover:scale-95 border-b-2 border-b-customBlack mt-10 rounded-full py-1 px-14">Search</button>
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