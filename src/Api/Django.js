import $ from "jquery";
import axios from 'axios';
import FormData from 'form-data'


let debug = true;

let clientesUrl = 'https://ronchon-choucroute-16574.herokuapp.com/api/clientes/';
let polizasUrl = 'https://ronchon-choucroute-16574.herokuapp.com/api/polizas/';
let policysUrl = 'https://ronchon-choucroute-16574.herokuapp.com/api/policys/';
let loginUrl = 'https://ronchon-choucroute-16574.herokuapp.com/auth/token-auth/'
let usersUrl = 'https://ronchon-choucroute-16574.herokuapp.com/api/profiles/'
let selfProfileUrl = 'https://ronchon-choucroute-16574.herokuapp.com/auth/myprofile/'
let vehiclesFilteredUrl = 'http://ronchon-choucroute-16574.herokuapp.com/api/vehiculospoliza/';
let vehiclesUrl = 'http://ronchon-choucroute-16574.herokuapp.com/api/vehicles/';

if (debug){
    clientesUrl = 'http://localhost:8000/api/clientes/';
    polizasUrl = 'http://localhost:8000/api/polizas/';
    policysUrl = 'http://localhost:8000/api/policys/';
    loginUrl = 'http://localhost:8000/auth/token-auth/';
    usersUrl = 'http://localhost:8000/api/profiles/';
    selfProfileUrl = 'http://localhost:8000/auth/myprofile/';
    vehiclesFilteredUrl = 'http://localhost:8000/api/vehiculospoliza/';
    vehiclesUrl = 'http://localhost:8000/api/vehicles/';
}





const api = {
  getUsers: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: usersUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token' + userToken}
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  postVehicles: (vehicle) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: vehiclesUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token' + userToken}
            });
            instance.post('',vehicle)
                .then(function (response) {
                        console.log(response)
                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  getVehicles: (id) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: vehiclesFilteredUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token' + userToken}
            });
            instance.get(id+'/')
                .then(function (response) {
                        console.log(response)
                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
  getPolicys: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: policysUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token' + userToken}
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    getPolicy: (id) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: polizasUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token' + userToken}
              });
              instance.get(id+'/')
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },
    newPolicy: (poliza) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: polizasUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.post('', poliza)
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },

  getClients: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        return new Promise(function (resolve, reject) {
            const instance = axios.create({
                baseURL: clientesUrl,
                //timeout: 2000,
                headers: {'Content-Type': 'application/json',
                    'Authorization': 'Token' + userToken}
            });
            instance.get()
                .then(function (response) {

                        resolve(response.data);
                })
                .catch(function (error) {
                    console.log(error.response);
                    reject(error);
                });


        });
    },
    getClient: (id) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: clientesUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token' + userToken}
              });
              instance.get(id+'/')
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },
    newClient: (poliza) => {

          const userToken = JSON.parse(localStorage.getItem('userToken'));

          return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: clientesUrl,
                  //timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.post('', poliza)
                  .then(function (response) {

                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });
      },

    tokenLogin: (auth) => {

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: loginUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                     }
              });
              instance.post('', auth)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

    createUser: (nuevo) => {

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: usersUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                     }
              });
              instance.post('', nuevo)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

    updateUser: (id, data) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: usersUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.patch(id + '/', data)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

     updateProfile: (data) => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: selfProfileUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.post('', data)
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },

    getProfile: () => {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

         return new Promise(function (resolve, reject) {
              const instance = axios.create({
                  baseURL: selfProfileUrl,
//                  timeout: 2000,
                  headers: {'Content-Type': 'application/json',
                      'Authorization': 'Token ' + userToken}
              });
              instance.get()
                  .then(function (response) {
                          resolve(response.data);
                  })
                  .catch(function (error) {
                      console.log(error.response);
                      reject(error);
                  });


          });

    },


} // api

export default api;
