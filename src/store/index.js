import { createStore } from 'vuex'

const store =  createStore({
    state: {   
        firstName: 'Badamasi',
        lastName: 'Abdulrahman',
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
          ]
    },
    getters: {
        fullname(state){
            return `${state.firstName} ${state.lastName}`
        },
        doneTodos (state) {
            return state.Lname
          },
          getTodos(state) {
            return state.todos
            
          }
    }, 
    mutations: {
      
    },  
    actions: {
        
    },
    
})