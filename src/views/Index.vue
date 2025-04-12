<template>
  <section class="home">
    <div class="content">
      <h1>포트폴리오</h1>

      <div class="buttons">
        <router-link to="/sub1" class="btn">서브페이지 1</router-link>
        <router-link to="/sub2" class="btn">서브페이지 2</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Index',
};
</script>

<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #f0f8ff, #e6e6fa);
  text-align: center;
}

.content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.content p {
  font-size: 1.2rem;
  color: #555;
}

.buttons {
  margin-top: 2rem;
}

.btn {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #36966c;
}
</style>
