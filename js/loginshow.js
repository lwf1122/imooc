function userQuit() {
    // alert("hello");
    localStorage.setItem('currentUser', 0);
    setLogin();
}
function setLogin() {
    var username = localStorage.getItem('currentUser');
    console.log(username);
    if (username == undefined || username == 0) {
        $("#islogin").hide();
        $("#loginin").show();
        console.log('not login');
    } else {
        $("#loginin").hide();
        $("#islogin").show();
        var html = "你好" + username;
        $("#msg").html(html);
        console.log('is login');
    }
}
setLogin();