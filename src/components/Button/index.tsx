import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  $variant?: 'primary' | 'secondary'
}

const Button = ({
  children,
  type,
  title,
  onClick,
  to,
  $variant = 'primary'
}: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        $variant={$variant}
        title={title}
        type={type}
        onClick={onClick}
      >
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
