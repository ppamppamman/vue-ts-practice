<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group 
        id="input-group-1" 
        label="스테이지 설명 :" 
        label-for="input-1"
        description="스테이지 설명을 입력하세요"
      >
        <b-form-input
          id="input-1"
          v-model="formStage.desc"
          required
          placeholder="스테이지 설명을 입력하세요">
        </b-form-input>
      </b-form-group>
      <b-form-group 
        id="input-group-2" 
        label="파일 업로드 :" 
        label-for="input-2"
      >
        <b-form-file
          v-model="formStage.file"
          :state="Boolean(formStage.file)"
          accept=".jpg, .png, .gif"
          placeholder="클릭 업로드"
          drop-placeholder="드래그앤드랍"
        >
        </b-form-file>
      </b-form-group>
      <div class="mt-3">선택된 이미지 : {{ formStage.file ? formStage.file.name : '' }}</div>
    </b-form>
    <b-card class="mt-3" header="테스트용 Form Data 결과">
      <pre class="m-0">{{ formStage }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formStage: {
          desc: "",
          file: null
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt){
        evt.preventDefault();
        alert(JSON.stringify(this.formStage));
      },
      onReset(evt){
        evt.preventDefault();
        this.formStage.desc = "";
        this.formStage.file = null;
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>