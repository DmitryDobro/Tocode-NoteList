<template>
    <div >
    <note-item
    v-for="note in notes"
    :key="note.id"
    class="note"
    :note="note"
    @remove="$emit('remove', note)"
    @uppdate="uppdateItem"
    />
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'
export default {
    components:{NoteItem},
    props:{
        notes:{
            type:Array,
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
