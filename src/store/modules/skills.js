const skills = {
    state: {
        data: []
    },
    getters: {
        skills(state){
            return state.data
        }
    },
    actions:{
        fetchSkills({state, rootGetters}){
            const {$http} = rootGetters;
            $http.get('/src/components/about/data.json').then(response=>{
                state.data = response.body
            }, error=>{
                console.error(error)
            });   
        }
    }
}

export default skills;