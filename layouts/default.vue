<template>
  <!-- 大枠のwrap -->
  <div id="wrap">
    <!-- header -->
    <header>
      <h3>Nuxt.js&firebaseで作る!リアルタイムチャット</h3>
    </header>
    <!-- main -->
    <main>
      <nuxt />
    </main>
    <!-- footer -->
    <footer>
      <p>
        <small>&copy; 2020 takashi&narita nuxt-learn-projects</small>
      </p>
    </footer>
  </div>
</template>

<style>
 *{
   margin: 0;
   padding: 0;
 }

 #wrap{
   margin: 0 auto;
   background-color: #eee;
 }

  header{
    background: #26A69A;
    color: #fff;
    padding: 16px;
  }

  footer{
    text-align: center;
    padding: 16px;
  }
</style>
