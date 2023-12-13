import { Link } from "react-router-dom"

export default function Button({children,disabled,to,type}) {
    const base="text-sm bg-yellow-400 font-semibold uppercase text-stone-800  inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed "
    const styles={
        primary:base+' px-4 py-3 md:py-4 md:px-6',
        small:base+' py-2 md:px-5 md:py2.5 text-xs',
        secondary:" px-4 py-3 md:py-4 md:px-6 border-2 border-stone-300 font-semibold uppercase text-stone-300  inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed "
    }
    if(to) return <Link className={styles[type]}>{children}</Link>
  return (
    <button disabled={disabled}className={styles[type]}> 
    {children}
    </button>
  )
}
