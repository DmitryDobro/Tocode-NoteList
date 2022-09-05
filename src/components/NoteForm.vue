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
    @click="tagActive"
    @onItemClick="onClick">
    </TagsList>
    <div class="form-footer">
    <button class="btn btnPrimary">Добавить</button>
    <select-notes
    v-model="selectedSort"
    :options="sortOptions">
    </select-notes>
    </div>
    
  </form>
</template>

<script>
  import SelectNotes from '@/components/UI/SelectNotes.vue';
import TagsList from '@/components/UI/TagsList.vue';
export default {
  components:{ TagsList,SelectNotes},
    data(){
        return{
          tag:["work","travel","home"],
            note:{
                 title:'',
                 body:'',
                 tags:[], 
                 time:''
            },
            selectedSort:'',
            sortOptions:[
              {value:"title",
               name:"По названию"},
               {value:"body",
               name:"По опиисанию"},
               {value:"time",
               name:"По времени"},
              ]
        };
    },
    watch:{
      selectedSort(newValue){
        this.$store.dispatch('sortNotes', newValue)
      }
    },
    methods:{
        addNote(){
                this.note.id = Date.now();
                this.note.time = new Date().toLocaleDateString();
                let tagActive = document.querySelectorAll('.tag-item.isActive')
                tagActive.forEach(e => this.note.tags.push(e.textContent))
                this.$store.dispatch('addNote', this.note)
                this.note = {
                    title:'',
                    body:'',
                    tags:[],
                    time:''
                }
                this.cleanActiveTags()
        },
        tagActive(event){
          event.target.parentElement.classList.toggle("isActive")
          console.log(event)
        },
        cleanActiveTags() {
        document.querySelectorAll("div.tag-item.isActive").forEach(e => e.classList.remove("isActive"))
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
.form-footer{
  display: flex;
  justify-content: space-between;
}
</style>


 