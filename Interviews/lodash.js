const _ = require('lodash');
// let users = require('./Data');

// const normal_user = _.orderBy(users, ['last_login'], ['desc']).filter(user => !user.email.includes('@anonymous.com'));// console.log(normal_user);
// const guest_user = _.orderBy(users, ['last_login'], ['desc']).filter(user => user.email.includes('@anonymous.com'));
// const common_user = _.intersectionBy(normal_user, guest_user, 'registration_token');
// const common_user_tokens = common_user.map(user => user.registration_token);
// const common_users = _.filter(users, user => common_user_tokens.includes(user.registration_token));
// const play_user = _.filter(common_users, item => !item.email.includes("@anonymous.com"));
// // play_user.map((item) => {
// //     console.log('PLAY_USER',item.email);
// // })
// // console.log('PLAY', play_user);
// const rem_play_user = _.difference(normal_user, play_user);
// // rem_play_user.map((item) => {
// //     console.log('REM_PLAY_USER',item.email);
// // })
// // console.log('REM_PLAY', rem_play_user);
// const occupied_guest = _.difference(common_users, play_user);
// const rem_guest = _.difference(guest_user, occupied_guest);
// // rem_guest.map((item) => {
// //     console.log('REM_GUSET,item.email', item.email);
// // })
// const unique_rem_guest = _.uniqBy(rem_guest, 'registration_token');
// // unique_rem_guest.map((item) => {
// //     console.log('UNIQUE_REM_GUEST', item.email);
// // })
// // console.log("REM", unique_rem_guest);
// const final_users = [... play_user, ...rem_play_user, ...unique_rem_guest];
// console.log('===========================FINAL========================');
// final_users.map((item) => {
//     console.log(item.name);
// })
// // console.log("FINAL", final_users);
// console.log('===========================UNIQUE========================');
// const unique_users = _.uniqBy(final_users, 'email');
// unique_users.map((item) => {
//     console.log(item.name);
// })
// // console.log("UNIQUE_FINAL", unique_users);

// // unique_users.map((item) => {
// //     console.log('UNIQUE', item.email);
// // })
// // console.log("REM", unique_rem_guest);
// // console.log("UNIQUE", unique_users);
// // unique_users = _.uniqBy(users, function (e) {
// //     return e.registration_token;
// // });
// // console.log("UNIQUE", unique_users);
// // console.log(Object.keys(unique_users).length);
  
// let result = [];
// const map = new Map();
// unique_users.forEach((item) => {
//     if (!map.has(item.registration_token)) {
//         map.set(item.registration_token, { count: 1, records: [{ id: item.id, name: item.name, email:item.email }] });
//       } else {
//         const tokenData = map.get(item.registration_token);
//         tokenData.count += 1;
//         tokenData.records.push({ id: item.id, name: item.name, email:item.email });
//       }
//   });

//   for (let [key, value] of map) {
//     if(value.count >1) {
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
//     }

// //   console.log(result);
  
// //   for (let [key, value] of map) {
// //     console.log(key + " = " + value.records.id);
// //   }

// //   const normal_users = _.filter(users, user => !user.email.includes('@anonymous.com'));
 
// //   const anon_users = _.filter(users, item => item.email.includes("@anonymous.com"));
 
// //   const [common_users, unique_normal_users] = _.partition(normal_users, user =>
// //     _.some(anon_users, anon_user => anon_user.registration_token === user.registration_token)
// //   );
// // //   console.log(Object.keys(common_users).length);
// // //   console.log(Object.keys(unique_normal_users).length);
// //   const common_user_tokens = _.map(common_users, 'registration_token');
// //   const common_anon_users = _.filter(anon_users, user =>
// //     common_user_tokens.includes(user.registration_token) && !_.some(common_users, {registration_token: user.registration_token})
// //   );
  
// //   const unique_anon_users = _.difference(anon_users, common_anon_users);
  
// //   const unique_users = [...common_users, ...unique_normal_users, ...common_anon_users, ...unique_anon_users];
// //   console.log(Object.keys(unique_users).length);
  
  
// // console.log('UNI_USER', unique_users);






let q = [
  {
  "id": 1,
  "content": "Which of the following tool is UI based and is required to complete tasks in Azure?",
  "sort_order": 5,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure Portal is a  single, unified hub for building, managing and monitoring your workloads in azure",
  "created_at": "2021-12-23T06:30:28.161Z",
  "updated_at": "2023-04-11T12:29:49.933Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 2,
  "content": "Your company needs to implement a relational database in Azure. The solution must minimize ongoing maintenance. Which Azure service would you use?",
  "sort_order": 7,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure SQL Database is an up-to-date, fully managed relational database service built for the cloud",
  "created_at": "2021-12-23T06:33:41.833Z",
  "updated_at": "2023-04-11T12:29:49.932Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 3,
  "content": "Which API of cosmos DB can be used to work with column based data?",
  "sort_order": 4,
  "category_id": 1,
  "is_random": false,
  "explanation": "The Azure Cosmos DB API for Cassandra stores data in column-oriented schema",
  "created_at": "2021-12-23T06:29:44.489Z",
  "updated_at": "2023-04-11T12:29:49.926Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 4,
  "content": "You have big data stored in data warehouse. You need to process the data in Azure Synapse Analytics. Which technology would you use?",
  "sort_order": 1,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure Synapse uses massively parallel processing (MPP) database technology to manage analytical workloads and process large volumes of data efficiently",
  "created_at": "2021-12-23T06:27:20.441Z",
  "updated_at": "2023-04-11T12:29:49.925Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 5,
  "content": "Which of the following tool can be used to access data stored in Azure Storage Account?",
  "sort_order": 8,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure Storage Explorer is used to access data stored in Azure Storage account. It includes Azure Blobs, Azure Files, Azure Queues, Azure Tables, Azure Disks",
  "created_at": "2021-12-23T06:34:10.708Z",
  "updated_at": "2023-04-11T12:29:49.902Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 6,
  "content": "Which command-line tool would you use to query Azure SQL databases?",
  "sort_order": 6,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure CLI is a command-line tool for querying purpose in Azure SQL DB",
  "created_at": "2021-12-23T06:32:00.958Z",
  "updated_at": "2023-04-11T12:29:49.897Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 7,
  "content": "Which of the following best describes the format of an Azure Resource Manager template?",
  "sort_order": 3,
  "category_id": 1,
  "is_random": false,
  "explanation": "ARM template is a JavaScript Object Notation (JSON) file that defines the infrastructure and configuration for your project.",
  "created_at": "2021-12-23T06:28:37.113Z",
  "updated_at": "2023-04-11T12:29:49.887Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 8,
  "content": "You are assigning Azure AD roles. Which role will allow the user to manage all the groups in your Team's tenants and be able to assign other administrator roles? Select one.",
  "sort_order": 2,
  "category_id": 1,
  "is_random": false,
  "explanation": "Global administrator can manage all aspects of Azure AD and Microsoft services that use Azure AD identities.",
  "created_at": "2021-12-23T06:27:59.176Z",
  "updated_at": "2023-04-11T12:29:49.880Z",
  "level_id": 11,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 9,
  "content": "How to assign 50 Azure VMs to specific cost centers (sales and finance) in an organization?",
  "sort_order": 5,
  "category_id": 1,
  "is_random": false,
  "explanation": "Tags are used to identify resources based on settings that are relevant to your organization",
  "created_at": "2021-12-23T06:24:39.691Z",
  "updated_at": "2023-04-11T12:29:42.450Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 10,
  "content": "The term IANA stands for?",
  "sort_order": 1,
  "category_id": 1,
  "is_random": false,
  "explanation": "IANA is an abbrevation for Internet Assigned Numbers Authority",
  "created_at": "2021-12-23T06:08:59.576Z",
  "updated_at": "2023-04-11T12:29:42.440Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 11,
  "content": "Which protocol allows user to retrived his/her mail from the mail server to his/her mail reader?",
  "sort_order": 2,
  "category_id": 1,
  "is_random": false,
  "explanation": "Post Office Protocol 3, or POP3, is the most commonly used protocol for receiving email over the internet",
  "created_at": "2021-12-23T06:22:29.783Z",
  "updated_at": "2023-04-11T12:29:42.436Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 12,
  "content": "Redis Cache is what kind of service in Azure?",
  "sort_order": 3,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure Cache for Redis is a fully managed, in-memory cache that enables high-performance and scalable architectures. Use it to create cloud or hybrid deployments that handle millions of requests per second at sub-millisecond latency—all with the configuration, security and availability benefits of a managed service",
  "created_at": "2021-12-23T06:22:57.330Z",
  "updated_at": "2023-04-11T12:29:42.428Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 13,
  "content": "Which Azure Data Factory component provides the compute environment for activities?",
  "sort_order": 4,
  "category_id": 1,
  "is_random": false,
  "explanation": " An integration runtime provides the bridge between the activity and linked Services. It's referenced by the linked service or activity, and provides the compute environment where the activity either runs on or gets dispatched from",
  "created_at": "2021-12-23T06:23:35.831Z",
  "updated_at": "2023-04-11T12:29:42.419Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 14,
  "content": "Which among the following is the correct Azure CLI cmdlet to create a Network Security Group (NSG)?",
  "sort_order": 6,
  "category_id": 1,
  "is_random": false,
  "explanation": "az network nsg create' is correct  Azure CLI cmdlet to create a Network Security Group (NSG)",
  "created_at": "2021-12-23T06:25:12.769Z",
  "updated_at": "2023-04-11T12:29:42.412Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 15,
  "content": "You need to ensure that users use multi-factor authentication (MFA) when connecting to an Azure SQL database. Which type of authentication would you use?",
  "sort_order": 7,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure Active Directory authentication supports Multi-Factor authentication through Active Directory Universal Authentication",
  "created_at": "2021-12-23T06:26:04.785Z",
  "updated_at": "2023-04-11T12:29:42.398Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
{
  "id": 16,
  "content": "CHECkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
  "sort_order": 7,
  "category_id": 1,
  "is_random": false,
  "explanation": "Azure Active Directory authentication supports Multi-Factor authentication through Active Directory Universal Authentication",
  "created_at": "2021-12-23T06:26:04.785Z",
  "updated_at": "2023-04-11T12:29:42.398Z",
  "level_id": 10,
  "league_id": null,
  "deleted_at": null
},
  ]
  const numQuestionPerBot = 4;
  const numBots = _.floor(q.length / numQuestionPerBot);
  q = _.chunk(_.shuffle(q), numQuestionPerBot);
  console.log('LATERQ', q.length);
  
  for (let i = 0; i < numBots; i++) {
    // _.each(q[i], async lq => {
    //   console.log(`Q-${[i]}`, q[i]);
    //   console.log(lq.id);
    // })
    for (let j = i * numQuestionPerBot; j < (i + 1) * numQuestionPerBot; j++) { 
      console.log('I', i);
      console.log('J', j);
      console.log('==============');
    }
  }
  