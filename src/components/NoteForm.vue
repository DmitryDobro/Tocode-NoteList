<template>
    <form @submit.prevent>
    <input 
    v-model="note.title"
    class="input" 
    placeholder="Заголовок"
    type="text">
    <input 
    v-model="note.body"
    class="input" 
    placeholder="Описание"
    type="text">
    <button class="btn"
     @click="addNote"
    >Добавить</button>
  </form>
</template>

<script>
export default {
    data(){
        return{
            note:{
                 title:'',
                 body:'',
            }
           
        };
    },
    methods:{
        addNote(){
           this.note.id = Date.now();
           this.$emit('create', this.note)
            this.note = {
                title:'',
                body:'',
            }
        },
    }
}
</script>

<style lang="scss" scoped>

form{
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  padding: 30px;

}
  .input {
    margin-bottom: 15px;
    border: 1px solid rgb(60, 36, 133);

}
.btn {
  width: 100px;
  background-color: #fff;
  border: 1px solid rgb(60, 36, 133);
  border-radius: 15px;
}
</style>


 