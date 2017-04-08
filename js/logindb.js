$("#register").on("click", function () {
        var username = $("#user").val();
        var password = $("#pass").val();

        if(localStorage.getItem(username)==undefined){
            //添加key-value 数据到 sessionStorage
            localStorage.setItem(username, password);
            alert('注册成功');
            localStorage.setItem('currentUser',username);
            window.location.href="index.html";

        }else{
            alert('该用户已注册');
        }
    });

$("#login").on("click", function () {
    var user = $("#login_user").val();
    var pass = $("#login_pass").val();
    if (localStorage.getItem(user)) {
        if (localStorage.getItem(user) != pass) {
            alert('用户名或密码错误');
        } else {
            localStorage.setItem('currentUser', user);//把当前用户存下来
            alert('success');
            window.location.href="index.html";
            //setLogin();
        }
    } else {
        alert('用户名不存在');
    }
        //添加key-value 数据到 sessionStorage
        //通过key来获取value
});