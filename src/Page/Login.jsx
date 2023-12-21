import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Login = () => {
  const navigate = useNavigate();
    const {signIn,signInWithGoogle} = useAuth();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
          navigate('/dashboard')
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error.message)
        })
    }
    // sign in with google
    const logInWithGoogle = () => {
      signInWithGoogle()
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error.message)
      })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#fcefe7] text-gray-900'>
          <div className='mb-8 text-center'>
            <h1 className='my-3 text-[#020419] text-4xl font-bold'>Please Login Now</h1>
            <p className='text-sm text-[#a2a2a4]'>Log in to access your account</p>
          </div>
          <form
            onSubmit={handleLogin}
            noValidate=''
            action=''
            className='space-y-6 ng-untouched ng-pristine ng-valid'
          >
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block mb-2 text-sm'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter Your Email Here'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#3b2b79ec] bg-gray-200 text-gray-900'
                  data-temp-mail-org='0'
                />
              </div>
              <div>
                <div className='flex justify-between'>
                  <label htmlFor='password' className='text-sm mb-2'>
                    Password
                  </label>
                </div>
                <input
                  type='password'
                  name='password'
                  autoComplete='new-password'
                  id='password'
                  required
                  placeholder='*******'
                  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#3b2b79ec] bg-gray-200 text-gray-900'
                />
              </div>
            </div>
  
            <div>
              <button
                type='submit'
                className='bg-[#3b2b79ec] w-full rounded-md py-3 text-white'
              >
                Login
              </button>
            </div>
          </form>
          <div className='flex items-center pt-4 space-x-1'>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
            <p className='px-3 text-sm dark:text-gray-400'>
              Signup with social accounts
            </p>
            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          </div>
          <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-[#3b2b79ec] border-rounded cursor-pointer hover:bg-[#3b2b79ec] hover:text-white transition-all'>
            <FcGoogle size={32} />
  
            <button onClick={logInWithGoogle}>Continue with Google</button>
          </div>
          <p className='px-6 text-sm text-center text-[#a2a2a4]'>
            Do not have an account?{' '}
            <Link
              to='/signup'
              className='hover:underline hover:text-[#3b2b79ec] text-gray-600 font-bold'
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;