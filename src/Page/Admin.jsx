import React, { useState } from 'react'

const Admin = () => {
  const [addveg, setAddveg] = useState('')
  const [addedValues, setAddedValues] = useState([]);
  const [count,setCount]=useState(0)



  const handleAdd = (e) => {
    e.preventDefault();

    let obj = {
      id:count,
      value:addveg,
    }

    // Add the current input value to the list of added values
    setAddedValues((prevValues) => [...prevValues, obj]);
    setCount(count+1)
    // Clear the input field after adding the value
    setAddveg('');
  };
  const deleteElement = (id) => {
    const newArray = addedValues.filter(item => item.id !== id);
    setAddedValues(newArray);
  };
  return (

    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">

          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Admin
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    name="add-vegetable"
                    id="add-vegetable"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add vegetable"
                    required=""
                    value={addveg}
                    onChange={(e) => { 
                      setAddveg(e.target.value)
                      // console.log(addveg);
                      console.log(e.target.value);
                     }}
                  />
                  {/* <p>Input Value: {addveg}</p> */}
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={handleAdd}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className='py-3 gap-3'>
            <h2>List of vegetables</h2>
            <ul>
              {addedValues.map((x, index) => (
                <div className="flex gap-3 py-2 justify-between"key={index}>{x.value}
                <button className='text-sm border-2 border-yellow-500 w-20 h-7 text-yellow-500 rounded-md gap-5'onClick={() => deleteElement(index)}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Admin