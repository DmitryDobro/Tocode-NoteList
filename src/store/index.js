import { createStore } from 'vuex'

export default createStore({
  state: {
    notes:[],
  },
  getters: {
    getNotes(state){
      return state.notes
    },
  },
  mutations: {
    addNote(state, note){ //добавить заметку
      state.notes.push(note);
    },
    removeNote(state, note) { //удалить заметку
      state.notes = state.notes.filter(item =>  item.id !== note.id)
    },
    uppdateNote(state, newNote){ //редактироваь заметку
      console.log(newNote);
      let index = state.notes.findIndex(item => item.id == newNote.id )
      state.notes.splice(index,1,newNote )
    },
    // async getNotestFromServer(state){ //загрузить с сервера заметки
    //   let response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20")
    //   state.notes = await response.json()
    // },
      getNotes(state) { //загрезить с localStorage заметки
        const localNotes = localStorage.getItem("notes");
        if (localNotes) {
          state.notes = JSON.parse(localNotes);
        }
      },
    sortNotes(state,newValue){
      state.notes.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue])
      })
    }
  },
  actions: {
    addNote(context, payload){
      context.commit('addNote', payload)
    },
    removeNote(context, payload){
      context.commit('removeNote', payload)
    },
    uppdateNote(context, payload){
      context.commit('uppdateNote', payload)
    },
    sortNotes(context, payload){
      context.commit('sortNotes', payload)
    }
  },
  modules: {
  }
})
