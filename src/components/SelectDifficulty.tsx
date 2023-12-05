import '../styles/SelectDifficulty.scss';
import Button from 'react-bootstrap/Button';

const SelectDifficulty = (props: SelectDifficultyProps) => {
  const { onSelect, disableButtons } = props;

  return (
    <div className='select-difficulty-container'>
      <h2>Выберите сложность:</h2>
      <Button disabled={disableButtons} className='easy-button' onClick={() => onSelect('easy')} data-testid='select-diff-button-easy'>Легко</Button>
      <Button disabled={disableButtons} className='medium-button' onClick={() => onSelect('medium')} data-testid='select-diff-button-medium'>Средне</Button>
      <Button disabled={disableButtons} className='difficult-button' onClick={() => onSelect('difficult')} data-testid='select-diff-button-difficult'>Сложно</Button>
      <Button disabled={disableButtons} className='random-button' onClick={() => onSelect('random')} data-testid='select-diff-button-random'>Случайно</Button>
    </div>
  );
};

export default SelectDifficulty;

export interface SelectDifficultyProps {
  onSelect: Function;
  disableButtons: boolean;
};