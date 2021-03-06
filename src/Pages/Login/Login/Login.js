import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [users, setUsers] = useState();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    if (loading || sending) {
        return <Loading></Loading>
    }


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='container'>
            <div className='from-container mx-auto'>
                <h2 className='text-danger text-center mb-4'>Please Login</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="danger w-100 mx-auto d-block mb-3" type="submit">
                        Login
                    </Button>
                </Form>
                {errorElement}
                <p className='mb-0 mt-2 text-center ' >New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none text-danger' onClick={navigateRegister}>Please Register</Link> </p>
                <p className='mb-0 mt-2 text-center  '>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none p-0 text-danger' onClick={resetPassword}>Reset Password</button> </p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;