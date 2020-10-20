
const button = document.getElementById('addBtn');
const lists = document.getElementById('lists');

//リファクタリングRefactoring

async function getUsers(){
  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  return users;
}

async function listUsers(){
  const users = await getUsers();
  
  users.forEach(function(user){
  const list = document.createElement('li');//createElementを使うとHTML要素を生成できる
  list.innerText = user.name;
  lists.appendChild(list);
  });
}

button.addEventListener('click', listUsers);

window.addEventListener('load', listUsers);