const Login = () => {
    return (
        <div className='flex justify-center items-center h-screen w-screen overflow-hidden'>
            <div className="flex flex-1 justify-center items-center">
                <div className="card w-full max-w-xl ">
                    <div className='flex justify-center items-center gap-2'>
                        <img src="img/Logo.png" alt="logo" />
                        <h1 className="text-center font-bold text-2xl ">SIMS PPOB</h1>
                    </div>
                    <h1 className='text-3xl w-96 text-center font-bold m-auto my-10'>Masuk atau buat akun untuk memulai</h1>
                    <div className="card-body gap-10">
                        <div className="form-control w-full ">
                            <input type="text" placeholder='masukkan email anda' className='input input-bordered w-full' />
                        </div>
                        <div className="form-control w-full ">
                            <input type="password" placeholder='masukkan password anda' className="input input-bordered w-full " />
                        </div>
                        <button type="submit" className="btn w-full text-white bg-red-500 hover:bg-red-600 mt-5">Login</button>
                    </div>
                    <p className='text-center'>belum punya akun? registrasi <a href="/register" className=' font-bold text-red-500'>di sini</a></p>
                </div>
            </div>
            <div className='flex-1'>
                <img src="img/Illustrasi Login.png" className='w-full' alt="ilustrasi" />
            </div>
        </div>
    )
}

export default Login