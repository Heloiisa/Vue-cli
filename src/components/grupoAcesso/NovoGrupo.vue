<template>
<div>Para adicionar um novo grupo, informe um nome para este grupo e selecione as permissões de acesso:

     <b-row> 
        <b-col sm="4">  
            <div>
                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>

                <pre class="mt-3 mb-0">{{ text }}</pre>
            </div>
        </b-col>
         <b-col sm="4">  
            <div>
                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>

                <pre class="mt-3 mb-0">{{ text }}</pre>
            </div>
        </b-col>
         <b-col sm="4">  
            <div>
                <b-form-textarea
                id="textarea"
                v-model="text"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                ></b-form-textarea>

                <pre class="mt-3 mb-0">{{ text }}</pre>
            </div>
        </b-col>
     </b-row>
         </div>

</template>


<script>
export default {
data() {
      return {
        text: ''
      }
    }
  }
</script>

<style>

</style>
