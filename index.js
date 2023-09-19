// console.log("hello")
// console.log("helloo")
let database = [
    {
      username: "aliv",
      password: "courage",
    },
    {
      username: "uday",
      password: "123",
    },
    {
      username: "akash",
      password: "ios",
    },
  ];
  let newsfeed = [
    {
      name: "uday",
      post: "i will travel to mountains",
    },
    {
      name: "akash",
      post: "i am going to the beach",
    },
  ];
  
  function IsUserValid(username, password) {
    for(let i=0;i<database.length;i++){
  if(database[i].username=== username && database[i].password===password){
      return true;}
  }   
  return false;
  }
  
   function logIn(username,password ){
   if(IsUserValid(username,password)){
      console.log(newsfeed);
   }
   else{
      alert('invalid user')
   }
  }
   let userNamePrompt = prompt("what is your name ?");
    let passWordPrompt = prompt("what is your password ?");
  logIn(userNamePrompt, passWordPrompt);
  