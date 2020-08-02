import styled from 'styled-components'

// styles
const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`
const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ checked }) => checked ? '#2196F3' : '#ccc'};
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  ${({ checked }) => checked ? 'box-shadow: 0 0 1px #2196F3' : 'none'};

  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
    ${({ checked }) => checked ? 'transform: translateX(26px);' : ''};
  }
`

const Toggle = ({ checked, onChange }) => {

  return (
    <Label>
      <Input
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
      <Switch checked={checked} />
    </Label>
  )
}

export default Toggle
