<template>
    <div class="note">
        <div v-if="editMode" class="main">
            <div  class="real">
              <div class="note-time">
                {{note.time}}
              </div>
             
                <p>Заголовок: {{note.title}}</p>
                <p>Описание: {{note.body}}</p>
            </div>
            <div class="icon">
                <span @click="editTrue">&#9998;</span>
                <span @click="removeNote">&#10006;</span>
            </div>
            <div class="note-tags">
                  <TagsList isPreview v-if="note.tags && note.tags.length > 0" :items="note.tags"/>
            </div>
        </div>
        
        <div v-if="!editMode" class="edit">
            <input  @input="editBody" :value="note.body"  type="text">
            <input @input="editTitle" :value="note.title" type="text">
            <button @click="editFalse" class="btn">Изменить</button>
        </div>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue';

export default {
  components:{TagsList},
    props:{
        note:{
            type: Object,
        }
    },
    data(){
      return{
       editMode: true,
       newNote:{
        title:this.note.title,
        body:this.note.body
       }
      };
    },
    methods:{
      editTrue(){
        this.editMode = false

      },
      editBody(event){
        this.newNote.body = event.target.value;
      },
      editTitle(event){
          this.newNote.title = event.target.value;
      },
      editFalse(){
         this.editMode = true
         this.newNote.id = this.note.id
         this.newNote.tags = this.note.tags
       this.$store.dispatch('uppdateNote', this.newNote)
      },

      removeNote(){
       this.$store.dispatch('removeNote', this.note)
      },
    }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  background-color: #fff;
  border-radius: 15px;
}
.note {
    background-color: #ffffff;
    padding: 5px;
    font-weight: 500;
    margin-bottom: 20px;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
    border-radius: 15px;
    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
  }
.icon{
  span{
    cursor: pointer;
  }
}
.main{
  position: relative;
}
.note-time{
  position: absolute;
  top: 0;
  right: 0;
}
</style>
