<template lang="pug">
    .skills-list
        .skill-title {{skillTitle}}
            table.skill__table
                skill-item(v-for='n in 5' :key='n')
</template>


<script>
import skillItem from '../skill-item/index.vue'
export default {
    props: {
        skillTitle: String
    },
    components:{
        skillItem
    }
}
</script>
