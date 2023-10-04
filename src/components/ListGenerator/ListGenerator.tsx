import React from "react"
import style from "./ListGenerator.module.scss"

const ListGenerator: React.FC = () => {
  const refTextareaOne = React.useRef<HTMLTextAreaElement | null>(null)
  const [result, setResult] = React.useState(``)

  const clickButton = () => {

    if (refTextareaOne.current) {
      const text = refTextareaOne.current.value.split("\n").filter(elem => elem.length != 0)
      console.log("all: ", text)

      for (let i = 0; i < text.length; i++) {
        setResult(result + `<li>${text[i]}</li>\n`)
      }
    }
  }

  return (
    <>
        <textarea ref={refTextareaOne} className={style.textarea}/>
        <button onClick={clickButton}>test</button>
        <div>{result}</div>
    </>
  )
}

export default ListGenerator
