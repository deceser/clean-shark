import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import errorimg from   "../../assets/icon/icon-error.svg"



const email = () => {

const {register, handleSubmit, formState:{ errors }, reset} = useForm({ criteriaMode: "all" })

const onSubmit = data => {
    console.log(data);
    reset();
}


  return (
    <form className='flex gap-4 sm:items-start sm:flex-row flex-col' onSubmit={handleSubmit(onSubmit)}>  
    <div className={(errors?.email ? 'bg-red-500' : 'bg-white') + ' p-[2px] rounded-md relative'}>

    {errors?.email ? <i className="absolute right-[7px] top-[13px]"><img src={errorimg} alt="" /></i> : null}
    <input {...register("email", { 
        required : "Please, add your Email!", 
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Whoops, make sure it's an email"
        } }
        )} 
        className='text-black pl-6 py-2 rounded-md border-white outline-none'
        autoComplete='off'    
        />
       

          <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className='text-left px-2 text-[12px] italic py-1' key={type}>{message}</p>
              ))
            : null;
        }}
      />


    </div>
    <button type='submit' className='rounded-md px-4 py-2 text-white bg-red-500 shadow-lg hover:bg-white hover:text-red-400 border-[2px] smooth border-red-500'>Contact Us</button>
    </form>
  )
}

export default email