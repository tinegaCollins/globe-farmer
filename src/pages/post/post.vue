<template>
   <a href="/"><img src="../../../2.png"></a>
   <h3>Post an ad</h3>
          <!-- <form class="mt-4"
            action="/upload"
            method="POST"
            enctype="multipart/form-data"
            @submit="send"
          >
            <div class="form-group">
              <input
                type="file"
                name="file"
                id="image"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> -->
   
</template>

<script>
import  '../../assets/styles/global.css';
import axios from 'axios';


export default{
  data(){
    return{
    }
  }, 
  methods: {
    send(){
      const formData = new FormData()
      let image = document.getElementById('image').files[0];
      formData.append('image', image)
      axios.post('http://localhost:3000/images', formData)
      .then(response=>{
            console.log(response.data)
        })
      .catch(error=>{
            console.log(error);
        })
    }
  }
}
</script>
<style scoped>
a{
  margin-top: 20px;
}
a > img{
  height: 80px;
  width: auto;
}
h3{
  font-family: var(--main-font)
}
</style>