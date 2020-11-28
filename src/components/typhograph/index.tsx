import { TextTypography } from './text'
import { TitleTypography } from './title'

export type variantType =
  | 'extraSmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'extraLarge'
export type weightType =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
export type alignType = 'right' | 'left' | 'center'
export type tagType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'

export type colorType =
  | 'primary-light-2'
  | 'primary-light-1'
  | 'primary'
  | 'primary-dark-1'
  | 'primary-dark-2'
  | 'secondary-light-2'
  | 'secondary-light-1'
  | 'secondary'
  | 'secondary-dark-1'
  | 'secondary-dark-2'
  | 'gray-2'
  | 'gray'
  | 'black'
  | 'black-1'
  | 'black-2'
  | 'white'
  | 'success'
  | 'danger'
  | 'info'

interface InterfaceTypography {
  readonly children: React.ReactNode | React.ReactNodeArray
  readonly text: boolean
  readonly title: boolean
  readonly uppercase?: boolean
  readonly variant: variantType
  readonly color: colorType
  readonly weight?: weightType
  readonly alignMobile?: alignType
  readonly alignDesktop?: alignType
  readonly fixSize?: number
  readonly tag?: tagType
  readonly style?: React.CSSProperties
  readonly onClick?: () => void
  readonly id?: string
}

export const Typography = ({
  text = false,
  title = false,
  uppercase = false,
  variant = 'medium',
  color = 'black',
  weight = 'regular',
  alignMobile = 'left',
  alignDesktop = 'left',
  fixSize = undefined,
  tag = 'p',
  style,
  onClick,
  children,
  id,
}: InterfaceTypography) => {
  if (title) {
    return (
      <TitleTypography
        variant={variant}
        tag={tag}
        weight={weight}
        uppercase={uppercase}
        alignMobile={alignMobile}
        alignDesktop={alignDesktop}
        fixSize={fixSize}
        color={color}
        style={style}
        onClick={onClick}
        id={id}
      >
        {children}
      </TitleTypography>
    )
  }
  if (text) {
    return (
      <TextTypography
        variant={variant}
        tag={tag}
        weight={weight}
        uppercase={uppercase}
        alignMobile={alignMobile}
        alignDesktop={alignDesktop}
        fixSize={fixSize}
        color={color}
        style={style}
        onClick={onClick}
        id={id}
      >
        {children}
      </TextTypography>
    )
  }
  return <></>
}
