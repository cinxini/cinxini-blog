<template>
    <MainContainer>
        <div class="tag-page-title d-flex flex-row ga-2 align-center">
            <v-icon icon="fa-solid fa-circle-question" color="baseVariant" size="small"></v-icon>
            <div>Posts
                with <span class="tag-emphasis">{{ tag }}</span> tag</div>
        </div>
        <QueryContentList :query="query" :fromPage="`/tag/${tag}`" :page="page" />
    </MainContainer>
</template>

<script setup>
import MainContainer from '@/components/containers/MainContaienr.vue';
import QueryContentList from '@/components/containers/QeuryContetListSection.vue';
// import DotLoader from '@/components/display/DotLoader.vue';

const route = useRoute()
const tag = ref(route.params ? route.params.slug[0] : null);
console.log('tag slug page::', route)

const page = computed(() => {
    if (route.params.slug && route.params.slug.length > 1) {
        console.log('slug > 1:::', route.params.slug)
        return Number(route.params.slug[1]);
    } else {
        return 1;
    }
})
console.log(`I am on page #${page.value} of tag::${tag.value}`)

const query = computed(() => {
    const newQuery = { draft: false }
    if (tag.value) {
        newQuery.tags = {}
        newQuery.tags.$contains = [tag.value]
    }
    console.log(newQuery)
    return newQuery;
})


</script>

<style scoped>
.tag-page-title {
    font-size: 1.7em;
    font-weight: 400;
    color: rgb(var(--v-theme-baseVariant));
}

.tag-page-title .tag-emphasis {
    font-weight: 500;
    color: rgb(var(--v-theme-primary));
}
</style>