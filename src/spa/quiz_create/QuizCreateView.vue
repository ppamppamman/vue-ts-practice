<template>
  <b-container class="bv-example-row">
    <h3>퀴즈 만드는 곳</h3>
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">
            1) 퀴즈 정보 입력
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              This card start opened because <code>visible</code> is <code>true</code>
            </b-card-text>
            <!-- 컴포넌트 QuizFormInfo -->
            <QuizFormInfo />
            <!-- 컴포넌트 QuizFormInfo -->
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="info">
            2) 스테이지 및 이미지 정보 추가
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
            <!-- 컴포넌트 QuizFormStage -->
            <QuizFormStage />
            <!-- 컴포넌트 QuizFormStage -->
            <br>
            <b-button variant="success" size="sm">
              스테이지 추가
            </b-button>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" variant="info" v-b-toggle.accordion-3>
            Accordion 3
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </b-container>
</template>

<script>
import QuizFormInfo from "@/spa/quiz_create/components/QuizFormInfo.vue";
import QuizFormStage from "@/spa/quiz_create/components/QuizFormStage.vue";

export default {
  name: "quiz_create_view",
  components: {
    QuizFormInfo,
    QuizFormStage,
  },
  data() {
    return {
      text: `
        샘플 텍스트입니다.
      `
    };
  }
};
</script>
