<template>
    <div class="note">

        <div v-if="editMode" class="main">
            <div  class="real">
                <p>Заголовок: {{note.title}}</p>
                <p>Описание: {{note.body}}</p>
            </div>
            <div class="icon">
                <span @click="editTrue">&#9998;</span>
                <span @click="removeNote">&#10006;</span>
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
export default {
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
     
        // newTitle:'',
        // newBody:''
       
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
        this.$emit('uppdate',  this.newNote)
      },


      removeNote(){
        this.$emit('remove', this.note)
      },
    }
}
</script>

<style lang="scss" scoped>
.btn {
  width: 100px;
  background-color: #fff;
  border: 1px solid rgb(60, 36, 133);
  border-radius: 15px;
}
.note {
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  margin-bottom: 15px;
  border: 2px solid rgb(60, 36, 133);
  p{
    color:rgb(60, 36, 133);
  }
}
.icon{
  span{
    cursor: pointer;
  }
}
</style>
