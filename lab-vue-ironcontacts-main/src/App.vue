<script >

import contacts from "./contacts.json";

export default {
  data(){
    return{
      allContacts: contacts,
      VisibleContacts: []
    }
  },
  methods: {
    addRandom(){
      let randomIndex = Math.floor(Math.random() * this.allContacts.length);
      console.log(randomIndex);
      this.VisibleContacts.push(this.allContacts[randomIndex]);
      this.allContacts.slice(randomIndex,1);
    }
  },
  computed: {
    getContacts(){
      this.VisibleContacts = this.allContacts.slice(0,5);
      this.allContacts.splice(0,5)
      return this.VisibleContacts;
    }
  }
}
</script>

<template>
  <div id="#app">
    <h1>Iron Contacts</h1>
    <button @click="addRandom">add Random Contact</button>
    <button @click="sortName">Sort By Name</button>
    <button @click="sortPopularity">Sort by Popularity</button>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Grammy</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in getContacts" :key="contact.id">
          <td> <img width="100" :src="contact.pictureUrl" alt="">  </td>
          <td>{{contact.name}}</td>
          <td>{{ contact.popularity.toFixed(2)}}</td>
          <td> <img width="100" v-show="contact.wonOscar" src="../public/trophy.jpg" alt="trophy"> </td>
          <td><img width="100" v-show="contact.wonEmmy" src="../public/trophy.jpg" alt="trophy"></td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 100;
}
</style>
