<template lang="pug">
    .skills-list
        .skill-title {{skillTitle}}
            table.skill__table
                skill-item(
                        v-for='(skill, index) in skills' 
                        :key='index'
                        v-if='checkSkillType(skillTitle) === skill.type'
                        :skill='skill'
                )
            .buttons
                button(@click='addSkill(skillTitle)') Добавить
                input(
                    type='text'
                    v-model='newSkill'
                )
</template>


<script>
import skillItem from '../skill-item/index.vue'
export default {
    data(){
        return {
            newSkill:''
        }
    },
    props: {
        skillTitle: String,
        skills: Array
    },
    components:{
        skillItem
    },
    methods: {
        checkSkillType(skillType){
            switch (skillType) {
                case 'Frontend': return 1
                case 'Workflow': return 2
                case 'Backend': return 3
            }
        },
        addSkill(skillType){
            this.$emit('addSkill',{
                id: Math.round(Math.random() * 10000 ),
                name: this.newSkill,
                percents: 0,
                type: this.checkSkillType(skillType)
            })
        }
    }
}
</script>
