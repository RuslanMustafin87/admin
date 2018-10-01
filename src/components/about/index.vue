<template lang="pug">
    .about
        h1.title Страница "Обо мне"
        .skills(v-for='skillType in skillsTypes')
            skills-list(:skillTitle='skillType')
            br
</template>

<script>
import skillsList from '../skills-list/index.vue';
export default {
    data:function(){
        return {
            skillsTypes: ['Frontend','Workflow', 'Backend',]
        }
    },
    created() {
        this.$store.dispatch('fetchSkill')
    },
    components: {
        skillsList
    }
}
</script>

<style lang="scss" src='./style.scss' scoped >

</style>

