<template>
  <div id="container">
    <!-- スレッド一覧 -->
    <div id="treadbox">
      <h3>チャットルーム一覧</h3>
      <div class="container">
        <!-- スレッド -->
        <div class="cardbox" v-for="n in 5" :key="n">
          <h4>これはチャットタイトル</h4>
          <small>チャットの軽い説明が入るよ！</small>
          <div align="end">
            <!-- ボタンを押したらチャットルームとチャットルームの情報が入れ替わる的な -->
            <button>詳しくみる</button>
          </div>
        </div>
      </div>
    </div>
    <!-- チャットルーム -->
    <div id="chatbox">
      <div>
        <h3>チャットタイトル</h3>
      </div>
      <div class="container">
        <div class="cardbox" v-for="n in 5" :key="n">
          <h4>ユーザーネームさん</h4>
          <p class="pa-4">
            おはよーーー　これはテストメッセージです。
          </p>
          <div>
            <!-- ボタン押したらモーダルウィンドーがでることを想定 -->
            <button>返信する</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
    }
  }
}
</script>

<style>
  #container{
    display: flex;
  }
  #treadbox{
    padding: 16px;
    width: 30%;
  }
  #chatbox{
    padding: 16px;
    width: 45%;
  }
  #treadbox .container{
    overflow: scroll;
    height: 100%;
  }
  .cardbox{
    background-color: #fff;
    margin: 16px 4px;
    padding: 16px;
    box-shadow: 0 0 8px gray;
  }
  .pa-4{
    padding: 16px;
  }
</style>
