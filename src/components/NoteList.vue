<template>
    <div >
    <note-item
    v-for="note in getNotes"
    :key="note.id"
    class="note"
    :note="note"
    />
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'
export default {
    components:{NoteItem},
    // props:{
    //     notes:{
    //         type:Array,
    //     },
    // },
    computed:{
    getNotes(){
      return this.$store.getters.getNotes
    },
    },
    methods:{
        uppdateItem(newNote){
            this.$emit('uppdate',  newNote) 
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
