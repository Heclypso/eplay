import * as S from './styles'

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
      <S.ButtonContainer
        $variant={$variant}
        title={title}
        type={type}
        onClick={onClick}
      >
        {children}
      </S.ButtonContainer>
    )
  }

  return (
    <S.ButtonLink to={to as string} title={title} onClick={onClick}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
