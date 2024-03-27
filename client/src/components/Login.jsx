const Login = () => {

    const handleLogin = () => {
        console.log('login')
    }

    const handleSignUp = () => {
        console.log('sign up')
    }


    return (
        <div style={{ textAlign: 'center' }}>
            <br />
            <br />
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button type="submit">Login</button>
            <button type="button">Sign Up</button>
        </form>
        </div>
    )

}

export default Login;