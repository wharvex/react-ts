interface Props {
  min: number, max: number
}

export const RandomMaker = (props: Props) => {
  const random = ({min, max}: Props) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div>
      <p>Minimum number: {props.min}</p>
      <p>Maximum number: {props.max}</p>
      <p>Generated number: {random(props)}</p>
    </div>
  )
}
