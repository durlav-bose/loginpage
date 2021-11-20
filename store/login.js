

const state = () => ({
    lists:[],
    token:null
})

const getters = {
    allMails: state => state.lists
}



const actions = {
    async getUserLoginToken({commit}, payload){
        // console.log(payload);
        try {
            const res = await this.$axios.post('/admin/super/login', payload)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        // const response = await axios.get('http://localhost:3000/admin/super', payload)
        // console.log(response)
        // const result = response.data
        // console.log(result)
        // commit('sendMail', result)
    }
}

const mutations = {
   sendMail(state, result){
       state.lists.push(result)
   }
}

export default {
    state,
    getters,
    actions,
    mutations
  };