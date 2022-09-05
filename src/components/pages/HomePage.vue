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
    mounted() {
    this.$store.commit('getNotes')
    // this.$store.commit('getNotestFromServer')
},

}
</script>
