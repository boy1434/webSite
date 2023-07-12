const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

/* form이 submit 되면 input 으로 부터 유저정보를 받고
    input 에서 받은 user를 가진 paintGreetings를 호출 */
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings();
}
/* greeting에 텍스트 Hello ${username) 을 추가 후 
   hidden class 명을 지워주는 함수 */
function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}
const savedUsername = localStorage.getItem(USERNAME_KEY);

/* local Storage 에 유저정보가 없다면 form의 submit을 기다리고
   */
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}

