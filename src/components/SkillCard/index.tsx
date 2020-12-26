import * as S from './styles'

export type SkillsProps = {
  name: string
  image: string
}

const SkillCard = ({ name, image }: SkillsProps) => (
  <S.Wrapper
    key={name}
    href="#"
    id={name}
    onClick={(e) => {
      e.preventDefault()
      eval(`TagCanvas.TagToFront("myCanvas", {id: "${name}", active: 1});`)
    }}
  >
    <S.ImageWrapper>
      <img
        width="60"
        height="60"
        src={`/img/tech/${image}.svg`}
        alt={`${name} logo`}
      />
      {name}
    </S.ImageWrapper>
  </S.Wrapper>
)

export default SkillCard
