/* eslint-disable react/prop-types */

const Input = ({handleChange, hint}) => {
 
  return (
    <div className="input">
      {/* <label htmlFor="input" >
      
      </label> */}
      <input
        type="text"
        id="input"
        onChange={handleChange}
        placeholder={ hint}
         
      />
    </div>
  );
};

export default Input;
