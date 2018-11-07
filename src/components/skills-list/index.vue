<template lang="pug">
    .skills-list
        .skill-title {{skillTitle}}
            table.skill__table
                skill-item(
                        v-for='(skill, index) in skills' 
                        :key='index'
                        v-if='checkSkillType(skillTitle) === skill.type'
                        :skill='skill'
                        @removeSkill='removeSkill'
                        @changePercent='changePercent'
                )
            .buttons
                button(
                    @click='addSkill(skillTitle)' 
                    :disabled="validation.hasError('newSkill')"
                    ) Добавить
                input(
                    type='text'
                    v-model='newSkill'
                    :class="{error: validation.hasError('newSkill')}"
                )
                div {{validation.firstError('newSkill')}}
</template>


<script>
import skillItem from '../skill-item/index.vue';
import SimpleVueValidator from 'simple-vue-validator';
import {Validator} from 'simple-vue-validator';

export default {
    mixins: [SimpleVueValidator.mixin],
    data(){
        return {
            newSkill: ''
        }
    },
    validators: {
        'newSkill'(value){
            return Validator.value(value).required('Поле не может быть пустым');
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
            this.$validate().then(success=>{
                if (!success) return

                this.$emit('addSkill',{
                id: Math.round(Math.random() * 10000 ),
                name: this.newSkill,
                percents: 0,
                type: this.checkSkillType(skillType)
                });
            
                this.validation.reset()
                this.newSkill = '';
            })
        },
        removeSkill(id){
            this.$emit('removeSkill',id)
        },
        changePercent(percent,id){
            this.$emit('changePercent',percent,id)
        }
    }
}
</script>
<style lang="scss" scoped>
    .error {
        border: 1px solid red;
    }
</style>