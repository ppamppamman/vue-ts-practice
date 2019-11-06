<template>
  <b-col cols="6">
    <div class="quiz">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col sm="12">
            <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
          </b-col>
          <b-col sm="12">
            <b-card-body title="이상형 월드컵">
              <b-card-text>
                카드 텍스트입니다. 사이즈가 전반적으로 다 작아져야겠네용
              </b-card-text>
                <div>
                  <b-row no-gutters>
                    <b-col >
                      <router-link :to="{path:'/'+quiz.id+'/show'}">
                        <b-button size="sm" variant="outline-primary">
                          시작
                        </b-button>
                      </router-link>
                    </b-col>
                    <b-col >
                      <router-link :to="{path:'/'+quiz.id+'/share'}">
                        <b-button size="sm" variant="outline-success">
                          공유
                        </b-button>
                      </router-link>
                    </b-col>
                  </b-row>
                </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </b-col>
</template>