<template lang="pug">
    .about
        h1.title Страница "Обо мне"
        .skills(v-for='skillType in skillsTypes')
            skills-list(
                :skills='skills'
                :skillTitle='skillType'
                :key='index'
                @addSkill='addSkill'
            )
            br
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

import skillsList from '../skills-list/index.vue';

export default {
    data:function(){
        return {
            skillsTypes: ['Frontend','Workflow', 'Backend',]
        }
    },
    computed: {
        ...mapGetters(['skills']),
    },
    methods: {
        ...mapActions(['fetchSkills']),
        addSkill(skill){
            console.log(skill)
        }
    },
    created() {
        this.fetchSkills();
    },
    components: {
        skillsList
    }
}
</script>

<style lang="scss" src='./style.scss' scoped >

</style>

