function Login(){
    const isLogin = true;
    return(
        <>
            {isLogin ? (<div>Thông tin người dùng. Logout</div>) : (<div>Đăng nhập. Đăng ký</div>)}
            {isLogin && (<div>Avatar</div>)}
        </>
    )
   
}

export default Login;