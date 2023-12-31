

const Input = ({label, name, type, id}) =>{

    return(
        <div className="mb-4">
        <label htmlFor="id" className="block text-gray-800 font-light mb-2">{label}</label>
        <input 
        type={type}
        name={name}
        id={id}
        autoComplete="off"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        required
        />
        </div>
    )
}

export default Input;