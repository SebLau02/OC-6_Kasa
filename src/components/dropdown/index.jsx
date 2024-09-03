import PropTypes from "prop-types"
import { useState, useRef, useEffect } from "react"
import Arrow from "../../utils/images/arrow.svg"

const Dropdown = ({ title, text }) => {
  const [open, setOpen] = useState(false)
  const dropDownHeaderRef = useRef(null)
  const dropDownRef = useRef(null)
  const dropDownMainRef = useRef(null)

  const handleOpen = (e) => {
    setOpen(!open)
  }
  useEffect(() => {
    if (dropDownHeaderRef.current) {
      if (!open) {
        dropDownRef.current.style.height = `${dropDownHeaderRef.current.scrollHeight}px`
      } else {
        dropDownRef.current.style.height = `${
          dropDownMainRef.current.scrollHeight +
          dropDownHeaderRef.current.scrollHeight
        }px`
      }
    }
  }, [open])

  return (
    <div className={`dropdown ${open} ? "hidden" : "" `} ref={dropDownRef}>
      <header ref={dropDownHeaderRef} onClick={handleOpen}>
        <span>{title}</span>
        <button
          className={!open ? "active" : ""}
          aria-label={
            !open ? `ouvrir l'onglet ${title}` : `fermer l'onglet ${title}`
          }
        >
          <img src={Arrow} alt={`flèche vers le ${!open ? "bas" : "haut"}`} />
        </button>
      </header>
      <main ref={dropDownMainRef} className={!open ? "active" : ""}>
        <ul>
          {text.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
}

export default Dropdown
