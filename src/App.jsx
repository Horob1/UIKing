import './App.css'
import { IoLockClosedOutline, IoPersonOutline } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RiErrorWarningLine } from 'react-icons/ri';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
function App() {
  const [formData, setFromData]= useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  })
  const [formFocus, seTFormFocus] = useState({
    name: false,
    username: false,
    password: false
  })

  const [isShowPwd, setShowPwd] = useState(false)

  function checkPasswordStrength(password) {
    if(!password) return {message: 'Chưa nhập mật khẩu', color: 'bg-red-500', level: 1}
    if(password.length < 8 ) return {message: 'Mật khẩu không hợp lệ', color: 'bg-red-500', level:1}
    let strength = 0;

    // Tiêu chí 1: Độ dài mật khẩu
    if (password.length >= 8) {
        strength += 1;
    }

    // Tiêu chí 2: Có chữ cái thường
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Tiêu chí 3: Có chữ cái hoa
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Tiêu chí 4: Có chữ số
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Tiêu chí 5: Có ký tự đặc biệt
    if (/[\W_]/.test(password)) {
        strength += 1;
    }
    
    
    if(strength <= 1) return {message: 'Mật khẩu quá yếu', color: 'bg-red-400', level: 1}
    else if(strength ===2) return {message: 'Mật khẩu bình thường', color: 'bg-yellow-600', level: 2}
    else if(strength ===3) return {message: 'Mật khẩu khá', color: 'bg-yellow-500', level: 3}
    else if(strength ===4) return {message: 'Mật khẩu mạnh', color: 'bg-green-300', level: 4}
    else if(strength ===5) return {message: 'Mật khẩu rất mạnh', color: 'bg-green-500', level: 5}
  }


// Ví dụ sử dụng hàm
  const checkName = (name, min) => {
    if(name.length < min) return false;
    if(/[\W_]/.test(name)) return false;
    return true;
  } 

  
  
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  return (
    <div className='grid grid-cols-2 gap-14 relative'>
      <div><img src="https://olm.vn/images/reg.gif" className='w-[500px] bg-yellow-600 h-[512px]' alt="" /></div>
      <form action="" className='flex flex-col items-center px-8  gap-4'>
        <h1 className='text-[#6568A3] font-medium text-2xl leading-[60px]'>Đăng ký tài khoản</h1>
        <div>
          <div className='relative flex-col'>
            <input type="text" value={formData.name} 
            onChange={(e)=>setFromData(prev=> ({...prev, name: e.target.value}))} 
            onBlur={()=>seTFormFocus(prev=> ({...prev, name: false}))} 
            onFocus={()=>seTFormFocus(prev=> ({...prev, name: true}))} 
            placeholder='Họ và tên' 
            className={`${!formData.name? '' : checkName(formData.name, 4)? '!border-green-500' : '!border-red-500'} 
            border-2 px-12  py-3 w-[380px] focus:outline-none text-lg focus:border-blue-500 rounded-md`} />
            <IoPersonOutline className='absolute top-1/2 left-3 text-2xl text-gray-400 -translate-y-1/2'/>
            {formData.name && !checkName(formData.name, 4) && <RiErrorWarningLine className='absolute top-1/2 right-3 text-2xl text-red-500 -translate-y-1/2'/>}
            {formData.name && checkName(formData.name, 4) && <TiTick className='absolute top-1/2 right-3 text-2xl text-green-500 -translate-y-1/2'/>}
            
          </div>
          {formFocus.name && <div className='flex animate-growth flex-col items-start pt-1 px-2'>
            <small className={(!formData.name || !/[\W_]/.test(formData.name))? 'text-green-500': 'text-red-500'}>Tên không chứa các ký hiệu đặc biệt</small>
            <small className={(formData.name.length>= 4 || !formData.name)  ? 'text-green-500' :  'text-red-500'}>Chứa tối thiểu 4 ký tự</small>
          </div>}
        </div>
        <div>
          <div className='relative flex-col'>
            <input type="text" value={formData.username} 
            onChange={(e)=>setFromData(prev=> ({...prev, username: e.target.value}))} 
            onBlur={()=>seTFormFocus(prev=> ({...prev, username: false}))} 
            onFocus={()=>seTFormFocus(prev=> ({...prev, username: true}))} 
            placeholder='Họ và tên' 
            className={`${!formData.username? '' : checkName(formData.username, 6)? '!border-green-500' : '!border-red-500'} 
            border-2 px-12  py-3 w-[380px] focus:outline-none text-lg focus:border-blue-500 rounded-md`} />
            <IoPersonOutline className='absolute top-1/2 left-3 text-2xl text-gray-400 -translate-y-1/2'/>
            {formData.username && !checkName(formData.username, 6) && <RiErrorWarningLine className='absolute top-1/2 right-3 text-2xl text-red-500 -translate-y-1/2'/>}
            {formData.username && checkName(formData.username, 6) && <TiTick className='absolute top-1/2 right-3 text-2xl text-green-500 -translate-y-1/2'/>}
            
          </div>
          {formFocus.username
           && <div className='flex flex-col items-start pt-1 px-2'>
            <small className={(!formData.username || !/[\W_]/.test(formData.username))? 'text-green-500': 'text-red-500'}>Tên không chứa các ký hiệu đặc biệt</small>
            <small className={(formData.username.length>= 6 || !formData.username)  ? 'text-green-500' :  'text-red-500'}>Chứa tối thiểu 6 ký tự</small>
          </div>}
        </div>
        
        <div className='relative'>
          <input type="text" value={formData.phone} onChange={(e)=>setFromData(prev=> ({...prev, phone: e.target.value}))} placeholder='Số điện thoại' className={`${formData.phone && !formData.phone.match(/^[0-9]{9,15}$/) ? '!border-red-500' : formData.phone.match(/^[0-9]{9,15}$/) ? '!border-green-500' : ''  } border-2 px-12  py-3 w-[380px] focus:outline-none text-lg focus:border-blue-500 rounded-md`} />
          <LuPhone className='absolute top-1/2 left-3 text-2xl text-gray-400 -translate-y-1/2'/>
          {formData.phone.length!==0 && !formData.phone.match(/^[0-9]{9,15}$/) &&<RiErrorWarningLine className='absolute top-1/2 right-3 text-2xl text-red-500 -translate-y-1/2'/>}
          {formData.phone.length!==0 && formData.phone.match(/^[0-9]{9,15}$/) && <TiTick className='absolute top-1/2 right-3 text-2xl text-green-500 -translate-y-1/2'/>}
        </div>
        <div className='relative'>
          <input type="email" onChange={(e)=>setFromData(prev=> ({...prev, email: e.target.value}))} placeholder='Email' className={`${!formData.email? '' : validateEmail(formData.email) ? '!border-green-500' :  '!border-red-500'} border-2 px-12  py-3 w-[380px] focus:outline-none text-lg focus:border-blue-500 rounded-md`} />
          <MdOutlineMail className='absolute top-1/2 left-3 text-2xl text-gray-400 -translate-y-1/2'/>
          {!validateEmail(formData.email) && formData.email && <RiErrorWarningLine className='absolute top-1/2 right-3 text-2xl text-red-500 -translate-y-1/2'/>}
          {validateEmail(formData.email) && <TiTick className='absolute top-1/2 right-3 text-2xl text-green-500 -translate-y-1/2'/>}
        </div>
        <div>
          <div className='relative'>
            <input type={isShowPwd? 'text' : 'password'} 
            onChange={(e)=>setFromData(prev=> ({...prev, password: e.target.value}))}
            onBlur={()=>seTFormFocus(prev=> ({...prev, password: false}))} 
            onFocus={()=>seTFormFocus(prev=> ({...prev, password: true}))} placeholder='Password'  className={`${formData.password.length >= 8 ? '!border-green-500' : formData.password.length === 0 ? '' : '!border-red-500'} border-2 px-12 py-3 w-[380px] focus:outline-none text-lg focus:border-blue-500 rounded-md`}/>
            <div onClick={()=>setShowPwd(!isShowPwd)}>
              {isShowPwd ? <FaRegEyeSlash className='absolute top-1/2 right-3 text-2xl text-gray-400 -translate-y-1/2'/> : <FaRegEye className='absolute top-1/2 right-3 text-2xl text-gray-400 -translate-y-1/2'/>}
            </div>
            
            <IoLockClosedOutline className='absolute top-1/2 left-3 text-2xl text-gray-400 -translate-y-1/2'/>
          </div>
          {formFocus.password
           && <>
          <div>
            <div className='flex gap-2 pt-2'>
              {[0,1,2,3,4].map((index)=> <div key={index} className={`h-2 ${index < checkPasswordStrength(formData.password)?.level? `${checkPasswordStrength(formData.password)?.color}`: 'bg-gray-500'} w-1/5`}></div>)}
            </div>
            <div className={`mt-2 ${checkPasswordStrength(formData.password)?.color} p-4 rounded-md`}>
              <span className='text-white'>{checkPasswordStrength(formData.password)?.message || "Chưa nhập mật khẩu"}</span>
            </div>
          </div>
          <div className='flex flex-col items-start pt-1 px-2'>
            <small>Nên chứa ký tự đăng biệt, ký tự viết hoa và chữ số</small>
            <small>Chứa tối thiểu 8 ký tự</small>
          </div>
          </>}
        </div>
        <button className='px-24 py-3 rounded-md text-white hover:opacity-75 bg-[#384FA1]'>Đăng ký</button>
        <span className='text-gray-400 text-base'>Hoặc</span>
        <button className='px-20 py-3 rounded-md text-white hover:opacity-75 bg-red-500 flex gap-4 items-center'><FcGoogle className='text-2xl' /><span>Đăng nhập bằng google</span></button>
        <span className='text-gray-400 text-base'>Đã có tài khoản? <a className='cursor-pointer font-semibold text-[#384FA1]'>Đăng nhập</a></span>
        
      </form>
      <img src="https://olm.vn/images/logo.png?v=1716218505" className='absolute right-1/2    top-5 w-16' alt="" />
    </div>
  )
}

export default App
