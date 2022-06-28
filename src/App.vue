<template>
<div class="wrapper">
 <note-form
 @create="addNote"/>
 <note-list
@remove="removeNote"
@uppdate="uppdateItem"
 :notes="notes"/>

</div>
</template>


<script>
import NoteForm from '@/components/NoteForm.vue'
import NoteList from '@/components/NoteList.vue'
export default {
  components:{NoteForm,NoteList},
  data(){
    return{
      notes:[{id:1, title:'test', body:'body'},
      {id:2, title:'test', body:'body'},
      {id:3, title:'test', body:'body'}],
    };
  },

  methods:{
    addNote(note){
    console.log(note);
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




<style lang="scss">
.wrapper{
  margin-right: auto;
  margin-left: auto;
  width: 700px;
  font-family: Arial, Helvetica, sans-serif;
  

}


</style>
