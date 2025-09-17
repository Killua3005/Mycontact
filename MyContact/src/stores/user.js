import { defineStore } from "pinia";

export const useUser =  defineStore("user",  {
    state: () => ({
      users : [],
      user : null,
      token : null,
      message :  null,
    }),

    getters: {
  },


    actions:{
      Register(name,email,password,confirm_password){
        fetch('https://api-contact.epi-bluelock.bj/api/users',{
          method : 'POST',
          headers : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body : JSON.stringify({
            name : name,
            email : email,
            password : password,
            confirm_password : confirm_password,
          })
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.$ref){
            this.message = "User create";
          }else{
            this.message = data.message;
          }
        })
      },
      Login(email,password){
          fetch('https://api-contact.epi-bluelock.bj/api/users/login',{
          method : 'POST',
          headers : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body : JSON.stringify({
            email : email,
            password : password,
          })
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.token){
            this.token = data.token;
            this.user = data;
            console.log(this.token)
          }else{
            this.message = data.message;
          }
        })
      },
      GetContact(){
        console.log(this.token);
        fetch('https://api-contact.epi-bluelock.bj/api/contacts?perPage=10000000000',{
          headers :{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization : `Bearer ${this.token}`,
          }
        })
        .then((response)=> response.json())
        .then((data) => {
          this.users = data.data
        })
      }
    }

  })
