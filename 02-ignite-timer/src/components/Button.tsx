import { ButtonContainer, ButtonVariant } from './Button.styles';

interface ButtonPorps {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary'}: ButtonPorps) {
  return (
    <ButtonContainer variant={variant} >Enviar</ButtonContainer>
  )
}