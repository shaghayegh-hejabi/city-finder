import { useState } from "react";
import cities from "./cities.json";
import Input from "./main.jsx";
import levenshtein from "fast-levenshtein"; 
import { motion } from 'framer-motion';
function App() {
  const [input, setInput] = useState(""); 
  const [suggestions, setSuggestions] = useState([]); 

  const handleInputChange = (event) => {
   const value = event.target.value;
   setInput(value);

   if (value.length > 0) {
     const filtered = cities
       
       .filter((city) => city.toLowerCase().startsWith(value.toLowerCase()))
       .map((city) => ({
         city,
         distance: levenshtein.get(value, city), 
       }))
       
       .sort((a, b) => a.distance - b.distance);

     setSuggestions(filtered.map((item) => item.city));
   } else {
     setSuggestions([]); 
   }
  };
  return (
    <div>
        <motion.h1
      animate={{
         backgroundImage: [
            "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
            "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
            "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
           "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
          ], 
      }}
      transition={{
        duration: 4,  
        repeat: Infinity,
         repeatType: "loop",
        ease: "easeInOut",  
      }}
      style={{
        fontFamily: 'Arial, sans-serif',
        fontSize: '3rem',
        textAlign: 'center',
        color:" #5d2663",
        marginBottom: '20px',
        textTransform: 'uppercase',
        letterSpacing: '2px',
      }}
      >
        City Search
      </motion.h1>
      <Input handleChange={handleInputChange} hint="Type a city name" />
      <motion.ul
        style={{ listStyleType: "none", padding: 0 }}
        animate={{ opacity: 1 }} 
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {suggestions.map((city, index) => (
          <motion.li
            key={index}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ddd",
              cursor: "pointer",
              backgroundColor: "#f4f4f4",
              borderRadius: "5px",
            }}
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: -10 }} 
            transition={{
              delay: index * 0.1, 
              type: "spring",
              stiffness: 200,
            }}
          >
            {city}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}

export default App;
