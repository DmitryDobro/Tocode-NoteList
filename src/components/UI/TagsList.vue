<template>
    <div class="tags-list">
      <TagItem v-for="(item, index) in items" :key="index"
       :item="item" 
       :class="{'hash':isPreview, isActive:isActive}"
       @click="this.$emit('click', event)" >
      </TagItem>
    </div>
</template>

<script>
import TagItem from '@/components/UI/TagItem.vue'
export default {
  components:{TagItem},
    props:{
    items:{
        type: Array,
    },
     isPreview:{
         type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
}
};
</script>


<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
    &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.hash {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>