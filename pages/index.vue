<template>
  <div id="container">
    <!-- チャットルーム作成 -->
    <div class="pa-4">
      <div class="pa-4 d-flex">
          <input id="text1" type="text" placeholder="チャットルームを入力">
          <button class="btn-flat-border">追加する</button>
      </div>
    </div>
    <!-- スレッド一覧 -->
    <div id="treadbox">
      <h3>チャットルーム一覧</h3>
      <div class="container">
        <!-- スレッド -->
        <div class="cardbox" v-for="n in 8" :key="n">
          <h3>これはチャットタイトル</h3>
          <div align="end">
            <!-- ボタンを押したらチャットルームとチャットルームの情報が入れ替わる的な -->
            <button class="btn-flat-border" @click.stop="$router.push('/chatroom')">詳しくみる</button>
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

<style scoped>
  h3,h4{
    color: #37474F;
  }
  #container{
    width: 1000px;
    margin: 16px auto;
  }
  #treadbox{
    padding: 16px;
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
  .btn-flat-border {
    display: inline-block;
    padding: 0.3em 1em;
    width: 150px;
    text-decoration: none;
    color: #26A69A;
    border: solid 2px #26A69A;
    border-radius: 3px;
    transition: .4s;
  }
  .btn-flat-border:hover {
    background: #26A69A;
    color: white;
  }
  .d-flex{
    display: flex;
  }
  #text1{
    width: 80%; /*親要素いっぱい広げる*/
    padding: 10px 15px; /*ボックスを大きくする*/
    margin: 0 16px;
    font-size: 16px;
    border-radius: 3px; /*ボックス角の丸み*/
    border: 2px solid #ddd; /*枠線*/
    box-sizing: border-box; /*横幅の解釈をpadding, borderまでとする*/
  }
</style>
