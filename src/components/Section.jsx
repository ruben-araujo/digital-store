const Section = ({ children, title}) => {
    return (
      <div className="flex items-center flex-col">
        <div className="flex max-w-[1440px]" >
          <h2 className="pb-3 pt-1 my-8 text-black font-bold font-oswald text-3xl">{title}</h2>
  
        </div>
        <div> 
          { children }
        </div>
      </div>
    )
  }
  // text-align center justify-between w-full m-x-10 size-full
  
  export default Section