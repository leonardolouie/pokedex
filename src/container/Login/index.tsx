import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from '../../components/Button'
import { postLogin } from '../../helpers/api.service'
import LoaderSpinner from "../../components/LoaderSpinner";
import { useRouter } from 'next/router'
import { toast } from "../../components/Toast";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const resetLocalStorage = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('authenticated');
    }

    useEffect(() => {
        resetLocalStorage()
    }, [])

    const onSubmit = async data => {
        setLoading(true);
        postLogin(data)
            .then((res: any) => {
                localStorage.setItem('user', JSON.stringify(res?.data?.data));
                localStorage.setItem('authenticated', 'true')
                toast.success("Successfully authenticated your account", null);
                setLoading(false)
                router.push('/')
            })
            .catch(() => {
                resetLocalStorage()
                toast.error("Your email and password didn't match", null);
                setLoading(false)
            });
    };

    return (
        <div className="bg-black w-full h-screen">
            <div className="flex flex-column justify-center items-center h-full">
                <div className="bg-paleGray w-full lg:w-1/4 h-2/4  flex flex-column justify-center items-center shadow-2xl">
                    <div className="w-full p-10 lg:p-0 lg:w-2/3">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5">
                                <input
                                    className=" bg-bgCardStrips text-white rounded-sm px-4 py-3 mt-3 focus:outline-none  w-full font-normal text-sm"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Entered value does not match email format"
                                        }
                                    })}
                                    placeholder="Email"
                                    type="email"

                                />
                                {errors.email &&
                                    <div className="text-center">
                                        <span className="text-sm text-red-400" role="alert">{errors.email.message}</span>
                                    </div>
                                }
                            </div>
                            <div className="mb-5">
                                <input
                                    className=" bg-bgCardStrips text-white rounded-sm px-4 py-3 mt-3 focus:outline-none w-full font-normal text-sm"
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 5,
                                            message: "Minimum length is 5 characters"
                                        }
                                    })}
                                    placeholder="Password"
                                    type="password"

                                />
                                {errors.password &&
                                    <div className="text-center">
                                        <span className="text-sm text-red-400" role="alert">{errors.password.message}</span>
                                    </div>
                                }
                            </div>
                            <div className="flex flex-row justify-center">
                                {loading &&
                                    <div>
                                        <LoaderSpinner width={100} height={100} />
                                        <p className="text-white"> Please wait...</p>
                                    </div>}
                                {!loading && <Button type="submit" label="LOGIN" />}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login