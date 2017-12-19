const mutations = {
  Taggetall(state, tags) {
    state.allTags = tags;
  },
  //创建标签，并push进currentArticle.tags里面
  Tagcreate(state, tag) {
    if (!state.allTags.some(o => o._id === tag._id)) {
      state.allTags.push(tag);
    }
  },
  Tagdelete(state,id){
    let inAllTagsIndex = state.allTags.findIndex(o => o._id === id);
    if(inAllTagsIndex >= 0){
       state.allTags.splice(inAllTagsIndex, 1);
    }
  }
}
export default mutations
