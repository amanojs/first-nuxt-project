<template>
  <div id="container">
    <!-- コメントを追加 -->
    <div class="pa-4">
      <div class="pa-4 d-flex">
        <input id="text1" type="text" placeholder="コメントを入力" />
        <button class="btn-flat-border" @click="sendChat({ payload })">
          送信する
        </button>
      </div>
    </div>
    <!-- チャットルーム -->
    <div id="chatbox">
      <div class="d-flex px-4">
        <h3>チャットタイトル</h3>
        <div class="flex-grow"></div>
        <button @click="$router.push('/')" class="btn-flat-border">
          ホームへ戻る
        </button>
      </div>
      <div class="container">
        <div class="cardbox" v-for="n in 5" :key="n">
          <h4>ユーザーネームさん</h4>
          <p class="pa-4">
            これはテストメッセージです。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      payload: {
        roomid: 1,
        userid: 1,
        username: "amanojs",
        message: "Hello,chat"
      }
    };
  },
  methods: {
    ...mapActions("chat", ["sendChat"])
  }
};
</script>

<style scoped>
h3 {
  color: #37474f;
}
#container {
  width: 1000px;
  margin: 16px auto;
}
#chatbox {
  padding: 16px;
}
.cardbox {
  background-color: #fff;
  margin: 16px 4px;
  padding: 16px;
  box-shadow: 0 0 8px gray;
}
.pa-4 {
  padding: 16px;
}
.btn-flat-border {
  display: inline-block;
  padding: 0.3em 1em;
  width: 150px;
  text-decoration: none;
  color: #26a69a;
  border: solid 2px #26a69a;
  border-radius: 3px;
  transition: 0.4s;
}
.btn-flat-border:hover {
  background: #26a69a;
  color: white;
}
.d-flex {
  display: flex;
}
#text1 {
  width: 80%; /*親要素いっぱい広げる*/
  padding: 10px 15px; /*ボックスを大きくする*/
  margin: 0 16px;
  font-size: 16px;
  border-radius: 3px; /*ボックス角の丸み*/
  border: 2px solid #ddd; /*枠線*/
  box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
}
.flex-grow {
  margin: 0 auto;
}

.px-4 {
  padding: 0 16px;
}
</style>
