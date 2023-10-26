
export default function Square({children,updateBoard,index,isSelected,handleClick}) {
  const className = "square " + (isSelected ? "is-selected" : "");
  return(
    <div className={className} onClick={handleClick}>
    {children}
    </div>
  )
};
