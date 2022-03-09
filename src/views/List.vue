import dados from './../dados/dado.json'

<template>
  <div class="container-fluid">
    <div class="card rounded">
      <table class="table">
        <thead class="color">
          <tr>
            <th scope="col">nome</th>
            <th scope="col">cargo</th>
            <th scope="col">status</th>
            <th scope="col">função</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody v-for="dado in dados" :key="dado.id">
          <tr>
            <th scope="row">{{ dado.name }}</th>
            <td>{{ dado.occupation }}</td>
            <td></td>
            <td>{{ dado.role }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="alingButton mr-3 mb-3">
        <router-link to="register" type="button" class="btn colorButton">Novo</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import dados from '../dados/dado.json'
export default {
  data() {
    return {
      dados: dados
    }
  }
}
</script>


<style>
.card {
  /* border-color: #f9fafb; */
  border: 1px solid #e5e7eb;
}

.colorButton {
  background-color: #4f46e5;
  color: white;
}
.alingButton {
  text-align: right;
  /* margin-right: 30px;
  margin-bottom: 10px; */
  border-radius: 4px;
}
.color {
  background-color: #f9fafb;
}
</style>
