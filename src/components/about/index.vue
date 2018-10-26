<template lang="pug">
    .about
        h1.title Страница "Обо мне"
        .skills(v-for='skillType in skillsTypes')
            skills-list(
                :skills='skills'
                :skillTitle='skillType'
                :key='index'
                @addSkill='addSkill'
                @removeSkill='removeSkill'
                @changePercent='changePercent'
            )
            br
        button(
            type='button'
            @click='addPercent'
        ) Сохранить
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';

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
        ...mapMutations(['addNewSkill','removeSaveSkill','addNewPercent']),
        addSkill(skill){
            this.addNewSkill(skill);
        },
        removeSkill(id){
            this.removeSaveSkill(id)
        },
        addPercent(){
            console.log(this.skills)
        },
        changePercent(percent,id){
            this.addNewPercent(percent)
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

