<template lang="pug">
    tr
                    td {{skill.name}}
                    td 
                        input(type='text'
                            v-model='percent'
                        )
                    td %
                    button(type='type' @click='removeSkill(skill.id)') Удалить
</template>

<script>
export default {
    data: function(){
        return {
            percent: this.skill.percents
        }
    },
    props:{
        skill: Object,
    },
    methods:{
        removeSkill(id){
            this.$emit('removeSkill',id)
        }
    }
}
</script>
