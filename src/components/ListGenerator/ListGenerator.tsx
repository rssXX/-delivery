import React from "react"
import style from "./ListGenerator.module.scss"

const ListGenerator: React.FC = () => {
  const refTextareaOne = React.useRef<HTMLTextAreaElement | null>(null)
  const [textareaTwo, setTextareaTwo] = React.useState()

  const clickButton = () => {
    if (refTextareaOne.current) {
      const result = refTextareaOne.current.value.split("\n").filter(elem => elem.length != 0)
      setTextareaTwo(result)
    }
  }

  return (
    <>
        <textarea ref={refTextareaOne} className={style.textarea}/>
        <button onClick={clickButton}>test</button>
        <input type="text" value={textareaTwo} />
    </>
  )
}

export default ListGenerator
