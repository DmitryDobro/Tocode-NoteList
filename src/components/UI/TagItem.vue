<template>
    <div class="tag-item"
    :class="{isPreview:isPreview, isActive:blue}"
    @click="handleClick">
        <span>{{item}}</span> 
    </div>
</template>

<script>

export default {
     props:{
    item:{
        type: String,
        },
    isPreview:{
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
     },
     data(){
        return{
          blue:false
        }
     },
    methods:{
         handleClick() {
          this.blue = !this.blue
      }
    }
}
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
  &.isPreview {
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