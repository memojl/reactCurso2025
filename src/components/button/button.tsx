import './button.css';

export const Button = () => {

  const handleClick = (msj: string) => {
    console.warn(msj);
  }


  return (
    <button onClick={()=>handleClick('Click')}>Button</button>
  )
}
