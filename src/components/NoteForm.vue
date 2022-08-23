<template>
    <form @submit.prevent="addNote" required>
    <input 
    required
    v-model="note.title"
    class="input" 
    placeholder="Заголовок"
    type="text">
    <input required
    v-model="note.body"
    class="input" 
    placeholder="Описание"
    type="text">
    <TagsList
    :key="index"
    :items="tag"
    @onItemClick="onClick">
    </TagsList>
    <button class="btn btnPrimary"
    >Добавить</button>
  </form>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue';
export default {
  components:{ TagsList},
    data(){
        return{
          tag:["work","travel","home"],
            note:{
                 title:'',
                 body:'',
                 tags:[]
            },
        };
    },
    methods:{
        addNote(){
                this.note.id = Date.now();
                let tagActive = document.querySelectorAll('.tag-item.isActive')
                for (let i = 0; i < tagActive.length; i++){
                  let x = tagActive[i].textContent
                    this.note.tags.push(x)
                }
                this.$emit('create', this.note)
                this.note = {
                    title:'',
                    body:'',
                    tags:[]
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

</style>


 