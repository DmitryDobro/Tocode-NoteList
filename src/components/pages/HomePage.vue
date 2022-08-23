<template>
    
     <div class="md-body">
       <NoteForm @create="addNote"></NoteForm>
       <NoteList
            @remove="removeNote"
            @uppdate="uppdateItem"
            :notes="notes"
       ></NoteList>
    </div>
</template>

<script>
  import NoteForm from '@/components/NoteForm.vue'
  import NoteList from '@/components/NoteList.vue'
export default {
    components:{NoteForm,NoteList,},
    data(){
    return{
      notes:[{id:1, title:'xxx', body:'body', tags:['work']},
      {id:2, title:'test', body:'body',tags:['work', 'home']},
      {id:3, title:'test', body:'body',tags:[]}],
       dataUser: '',
    };
   
  },
  computed:{
    getUsers(){
      return this.$store.getters.getUsers
    },
    getUser(){
     return this.$store.getters.getUser
  },
  },
  methods:{
    hanllerLogin(){
      this.$store.dispatch('setUser', this.dataUser)
    },
    addNote(note){
    // console.log(note);
      this.notes.push(note);
    },
    uppdateItem(newNote){
       let index = this.notes.findIndex(item => item.id == newNote.id )
            this.notes.splice(index,1,newNote )
    },
    removeNote(note){
      this.notes = this.notes.filter(item =>  item.id !== note.id)
    },
      getNotes() {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    }
  },
    mounted() {
    this.getNotes();
},
    watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem("notes", JSON.stringify(updatedList));
      },
      deep: true,
    },
  },
}
</script>
