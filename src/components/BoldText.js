const BoldText = ({ text }) => {
    const parseText = (inputText) => {
      const parts = inputText.split(/(\*\*.*?\*\*|##.*?##)/); 
      return parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index}>
              {part.slice(2, -2)} {/* Remove ** */}
            </strong>
          );
        }
        if (part.startsWith("##") && part.endsWith("##")) {
          return (
            <strong key={index} style={{ fontSize: "larger" }}>
              {part.slice(2, -2)} {/* Remove ## */}
            </strong>
          );
        }
        return part; 
      });
    };
  
    return <div>{parseText(text)}</div>;
  };



  export default BoldText