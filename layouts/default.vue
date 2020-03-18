<template>
  <!-- 大枠のwrap -->
  <div id="wrap">
    <!-- header -->
    <header>
      <h3 class="mx-4">Nuxt.js&firebaseで作る!リアルタイムチャット</h3>
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
   background-color: #fafafa;
 }

  header{
    background: #26A69A;
    color: #fff;
    padding: 16px;
    display: flex;
  }

  header .flex-grow{
    flex-grow: 1;
  }

  .mx-auto{
    margin: 0 auto;
  }

  .mx-4{
    margin: 0 16px;
  }

  .mx-12{
    margin: 0 48px;
  }

  footer{
    text-align: center;
    padding: 16px;
  }
</style>
