import '../../App'
const Login = () => {
  return (
    <div className=" login">
      <div className="flex items-center max-w-full shadow-2xl rounded-2xl hover:shadow-md wrapper">
        <div className="left">
          <div className="font-semibold bg-red-600 hover:bg-red-700 loginButton">
            <i className="mr-1 text-xl text-white fab fa-google leading-lg"></i>{' '}
            Google
          </div>
          <div className="font-semibold bg-blue-600 hover:bg-blue-700 loginButton">
            {' '}
            <i className="mr-1 text-xl text-white fab fa-facebook leading-lg"></i>
            Facebook
          </div>

          <div className="font-semibold bg-gray-600 hover:bg-gray-700 loginButton">
            {' '}
            <i className="mr-1 text-xl text-white fab fa-github leading-lg"></i>{' '}
            Github
          </div>
        </div>
        <div className="canter">
          <div className="font-semibold line" />
          <div className="font-bold or">OR</div>
        </div>
        <div className="right">
          <input className="font-medium" type="text" placeholder="Username" />
          <input
            className="font-medium"
            type="password"
            placeholder="Password"
          />
          <button
            className="px-4 py-2 m-2 text-xl font-semibold leading-tight text-white bg-indigo-500 lett hover:bg-indigo-600 rounded-xl"
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
