import Button from 'react-bootstrap/Button';
import '../styles/SelectSudokuMode.scss';
import { ModeType } from '../logic/Main';
import { useState } from 'react';

const SelectSudokuMode = (props: SelectSudokuModeProps) => {
  const [selectedMode, setSelectedMode] = useState<ModeType | null>(null);
  const onConfirm = props.onConfirm;

  const classicDescription = {
    title: 'Классический Судоку',
    description: "Обычный 9x9 судоку. Каждая строка, каждая колонка, и каждая область 3x3 должны содержать числа от 1 до 9 без повторов."
    // description: "Regular 9x9 sudoku. Each row, each column, and each 9x9 area must have the numbers 1-9, no duplicates allowed."
  };
  const diagonalDescription = {
    title: 'Диагональный Судоку',
    description: "В дополнении к правилам Классического судоку добавляется еще одно правило, что обе диагонали должны содержать числа от 1 до 9 без повторов."
    // description: "Just like classic sudoku, except now both diagonals have the numbers 1-9 also, no duplicates."
  };
  const oddDescription = {
    title: 'Нечетный Судоку',
    description: "В дополнении к правилам Классического судоку добавляется еще одно правило, что все подсвеченные клетки содержат только нечетные числа. Нечетные числа это 1, 3, 5, 7, 9"
    // description: "Just like classic sudoku, but the highlighted squares must be odd numbers."
  };
  const evenDescription = {
    title: 'Четный Судоку',
    description: "В дополнении к правилам Классического судоку добавляется еще одно правило, что все подсвеченные клетки содержат только четные числа. Четные числа это 2, 4, 6, 8"
    // description: "Just like classic sudoku, but the highlighted squares must be even numbers."
  };

  let displayDescription;
  if (selectedMode === 'diagonal') displayDescription = diagonalDescription;
  else if (selectedMode === 'odd') displayDescription = oddDescription;
  else if (selectedMode === 'even') displayDescription = evenDescription;
  else displayDescription = classicDescription;

  return (
    <div className='select-mode-container'>
      <h2>Выберите тип судоку:</h2>
      
      <div className='buttons-container'>

        <Button 
          variant={selectedMode === 'classic' ? 'secondary' : 'primary'} 
          className='classic-button' 
          onClick={() => setSelectedMode('classic')}
          >
          Классический
        </Button>

        <Button 
          variant={selectedMode === 'diagonal' ? 'secondary' : 'primary'}
          className='diagonal-button' 
          onClick={() => setSelectedMode('diagonal')}
        >
          Диагнональный
        </Button>


        <Button 
          variant={selectedMode === 'odd' ? 'secondary' : 'primary'} 
          className='odd-button' 
          onClick={() => setSelectedMode('odd')}

        >
          Нечетный
        </Button>
        
        <Button 
          variant={selectedMode === 'even' ? 'secondary' : 'primary'}
          className='even-button' 
          onClick={() => setSelectedMode('even')}
        >
          Четный
        </Button>
        
      </div>

      { selectedMode && displayDescription && 
        <>
          <div className='description'>
            <div className='description-header'>
              <h3 className='description-title'>{displayDescription && displayDescription.title}</h3>
              <Button className='confirm-button' variant='success' onClick={() => onConfirm(selectedMode)}>Продолжить</Button>
            </div>
            <p className='description-body'>{displayDescription && displayDescription.description}</p>
          </div>
          
        </>
      }
    </div>
  );
};

export default SelectSudokuMode;

export interface SelectSudokuModeProps {
  onConfirm: Function;
};