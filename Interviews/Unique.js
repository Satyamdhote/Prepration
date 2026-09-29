const axios = require("axios");

const auth = 'eyJraWQiOiJmaDZCczhDIiwiYWxnIjoiUlMyNTYifQ.eyJpc3MiOiJodHRwczovL2FwcGxlaWQuYXBwbGUuY29tIiwiYXVkIjoiY29tLkRlZmF1bHRDb21wYW55LkNsb3VkQXR0YWNrIiwiZXhwIjoxNjQ5NDA1OTM4LCJpYXQiOjE2NDkzMTk1MzgsInN1YiI6IjAwMDc3Ny45OTNhZmIzYWUzMDA0YjE1OTI1M2Q3Yjk1NzkxY2FmNi4wODExIiwiY19oYXNoIjoiLXlyUFJBMllxd2tCeHEzLUpwYTZVUSIsImVtYWlsIjoic3VicmFtYW55YWRAY2xvdWRhdHRhY2suaW4iLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJhdXRoX3RpbWUiOjE2NDkzMTk1MzgsIm5vbmNlX3N1cHBvcnRlZCI6dHJ1ZX0.J7cOdMObVlvrkwPNnmwv62YTcZ4eAK1uzH1S0aoNfYZ4fxtanpFDDvH0IBcHsHhyctu-0heVrtqXttJWVi8XXa0fkAGFH3UfFv2OIzD67b7kLS5R2_jC1J8gZ8XkXR0mUuGXUKtSuVCYx7dv27_ogqVbF7g1pvC0H9dqxjC0EoJYqXhRZlppoZ00x4YszadDq5-PP7AR19bztGHcMih3VoKjtap5UEAsOebHdqqLQDhGBI3SmOnuImpfwYJZIzSq2wvRTl6W1ssjAyfU3Y62nd-rJHGT6mtJWrPovW1X02mzkwtrYBRxVbF6HFjeis2_N4Lj27K8VlCguA_K3uotxA';
const url = 'https://api.cloudattack.in/api/user'
// const url = 'https://api.cloudattack.in/api/question/?level_id=11&getAll=true'
const header = {
  Token: auth,
  'Content-Type': 'application/json'
};


axios.get(url, { header: header })
  .then((response) => {
    response.data.forEach((item) => {
      console.log(item.full_name);
      // const lowerStr = item.full_name.toLowerCase();
      // const lowerSubstring = 'test';
      // let data = {
      //   xp: 0,
      // }
      // if(lowerStr.includes(lowerSubstring)) {
      //   // console.log( `${url}/${item.id}  --  ${lowerStr} --- ${item.xp}`)
      //   axios.put(`https://api.cloudattack.in/api/user/${item.id}`, data, { headers: header })
      //   .then((response) => {
      //     console.log('XP updated successfully:', response.data);
      //   })
      //   .catch((error) => {
      //     console.error('Error updating XP:', error);
      //   });
      // }
    })
  })

// const map = new Map();
// axios.get(url, { headers: header })
//   .then((response) => {
//     response.data.forEach((item) => {
//       if(item.registration_token && item.registration_token.trim() !== '') {
//         if (!map.has(item.registration_token)) {
//           map.set(item.registration_token, { count: 1, records: [{ id: item.id, name: item.full_name, email:item.email, last_login: item.last_logged_in }] });
//         } else {
//           const tokenData = map.get(item.registration_token);
//           tokenData.count += 1;
//           tokenData.records.push({ id: item.id, name: item.full_name, email:item.email, last_login:item.last_logged_in });
//         }
//       }
//     })})
// let result = [];

//   for (let [key, value] of map) {
//     console.log('HERE');
//     if(value.count >= 1) {
//         value.records.forEach(record => {
//             result.push({
//               id: record.id,
//               email: record.email,
//               name: record.name,
//               registration_token: key
//             });
//             console.log(key + " = " + JSON.stringify(value));
//         });
//     }
// };


// const _ = require('lodash');
// let users = require('./Data');

// users = _.orderBy(users, ['last_login'], ['desc']);
// const play = _.uniqBy(users, 'registration_token');
// play.map((item) => {
//     console.log(item.name);
// })
// let result = [];
// const map = new Map();
// play.forEach((item) => {
//     if (!map.has(item.registration_token)) {
//         map.set(item.registration_token, { count: 1, records: [{ id: item.id, name: item.name, email:item.email }] });
//       } else {
//         const tokenData = map.get(item.registration_token);
//         tokenData.count += 1;
//         tokenData.records.push({ id: item.id, name: item.name, email:item.email });
//       }
//   });

//   for (let [key, value] of map) {
//     if(value.count >= 1) {
//         value.records.forEach(record => {
//             result.push({
//               id: record.id,
//               email: record.email,
//               name: record.name,
//               registration_token: key
//             });
//             console.log(key + " = " + JSON.stringify(value));
//         });
//     }  
// }