<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="퀴즈 제목 :"
        label-for="input-1"
        description="퀴즈 제목을 입력하세요"
      >
        <b-form-input
          id="input-1"
          v-model="formInfo.title"
          required
          placeholder="퀴즈 제목을 입력하세요">
        </b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="퀴즈 설명 :" 
        label-for="input-2"
        description="퀴즈 설명을 입력하세요"
      >
        <b-form-input
          id="input-2"
          v-model="formInfo.desc"
          required
          placeholder="퀴즈 설명을 입력하세요">
        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="공개 여부 :" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formInfo.releaseType"
          :options="releaseType"
          required>
        </b-form-select>
      </b-form-group>

      
      <b-form-group 
        id="input-group-4" 
        label="비밀번호 :" 
        label-for="input-4"
        v-if="formInfo.releaseType == 2"
      >
        <b-form-input
          id="input-4"
          v-model="formInfo.password"
          required
          placeholder="비밀번호를 입력하세요">
        </b-form-input>
      </b-form-group>
      

      <b-button type="submit" variant="primary" size="sm">만들기</b-button>
      <b-button type="reset" variant="danger" size="sm">리셋하기</b-button>
    </b-form>
    <b-card class="mt-3" header="테스트용 Form Data 결과">
      <pre class="m-0">{{ formInfo }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInfo: {
        title: '',
        desc: '',
        releaseType: null,
        password: null
      },
      releaseType: [
        { text: '공개 방식을 선택해주세요.', value: null }, 
        { text: '전체 공개', value: 1 },
        { text: '비밀번호 공개', value: 2 },
      ],
      show: true
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.formInfo));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.formInfo.title = ""
      this.formInfo.desc = ""
      this.formInfo.releaseType = null
      this.formInfo.password = null
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>