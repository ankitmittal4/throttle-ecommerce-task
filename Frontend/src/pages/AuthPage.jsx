import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function AuthPage({ type }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [showReset, setShowReset] = useState(false);

    // const isLogin = type === 'Login';
    // const isSignup = type === 'Sign Up';
    const isForgot = type === 'Forgot Password';

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isForgot && !showReset) {
            alert('OTP sent to your email!');
            setShowReset(true);
        } else {
            alert(`${type} Submitted`);
        }
        navigate('/');
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">{type}</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="border p-3 rounded"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                {/* Password Field (for login/signup) */}
                {!isForgot && (
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                )}

                {/* Forgot password flow */}
                {isForgot && showReset && (
                    <>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            className="border p-3 rounded"
                            value={otp}
                            onChange={e => setOtp(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="New Password"
                            className="border p-3 rounded"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </>
                )}

                <button
                    type="submit"
                    className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                >
                    {isForgot && !showReset ? 'Send OTP' : 'Submit'}
                </button>
            </form>
            <div className="text-sm text-center mt-4 text-gray-600">
                {type === 'Login' && (
                    <>
                        <p>
                            Don’t have an account?{' '}
                            <Link to="/signup" className="text-black font-semibold hover:underline">
                                Sign Up
                            </Link>
                        </p>
                        <p>
                            Forgot your password?{' '}
                            <Link to="/forgot" className="text-black font-semibold hover:underline">
                                Reset here
                            </Link>
                        </p>
                    </>
                )}

                {type === 'Sign Up' && (
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="text-black font-semibold hover:underline">
                            Login
                        </Link>
                    </p>
                )}

                {type === 'Forgot Password' && (
                    <p>
                        Remembered your password?{' '}
                        <Link to="/login" className="text-black font-semibold hover:underline">
                            Go to Login
                        </Link>
                    </p>
                )}
            </div>

        </div>
    );
}

export default AuthPage;
