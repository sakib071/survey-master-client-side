import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const role = 'user';
        console.log(email, password, role);
        signIn(email, password, role)
            .then(result => {
                const user = result.user;
                alert("Login Successful")
                navigate(from, { replace: true });
                console.log(user);
            })
    }

    return (
        <div className="pt-32 mx-auto flex flex-col justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Hello Again!</h1>
                <p className="text-lg text-gray-500">Welcome back you&lsquo;ve been missed</p>
            </div>
            <div className="card w-full max-w-sm">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn bg-yellow-300 hover:bg-yellow-400 font-bold" type="submit" value="Login" />
                    </div>
                    <div className="divider">or continue with</div>
                    <SocialLogin></SocialLogin>
                    <p className='text-sm mt-6 mx-auto text-black'>New here? <Link to="/signup" className='hover:underline'>Create an account</Link></p>
                </form>
            </div>
        </div>

    );
};

export default Login;