console.log('Hello')

function getInitialInput(label) {
  let value;
  while (!(value = prompt(`Введите ваше(у) ${label}`)?.trim())) {
    alert(`Строка ${label} не может быть пустой. Попробуйте снова.`);
  }
  return value[0]?.toUpperCase()
}

function changeUserData() {
// const firstName = getInitialInput("имя"); 
// const lastName = getInitialInput("фамилию"); 
// alert(`Ваши инициалы: ${firstName} ${lastName}`); }
    const userData = {
     firstName: getInitialInput("имя"),
     lastName: getInitialInput("фамилию")
    };
  alert(`Ваши инициалы: ${userData.firstName}.${userData.lastName}.`);
  changeUserName(userData)
}

function changeUserName({firstName, lastName}){
 const userElement = document.querySelector(".user_name");
  if (userElement) {
    userElement.textContent = `${firstName}${lastName}`;
  }    
}