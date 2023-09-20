interface Props {
  children: string
  color?: 'primary' | 'seconday' | 'danger'
  onclick: () => void
}

const Button = ({ children, onclick, color = 'danger' }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
