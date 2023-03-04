export const FilterData=(searchQuery, allVideosStore)=>{
 const filterData=allVideosStore.filter((video)=>{
     return video?.title?.toLowerCase()?.includes(searchQuery.toLowerCase());
 });

 console.log(filterData+"filterData");
 return filterData;
};