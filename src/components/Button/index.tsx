import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, type, title, onClick, to }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title} onClick={onClick}>
      {children}
    </ButtonLink>
  )
}

export default Button
