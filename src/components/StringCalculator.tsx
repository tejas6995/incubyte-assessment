import { useState } from 'react';
import add from '@/string-calculator-Fn';
import { Button, Stack, TextField, Typography } from '@mui/material';

const StringCalculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = (): void => {
      try {
          const sum = add(input);
          setResult(sum);
          setError(null);
      } catch (err: unknown) {
            if (err instanceof Error) {
            setError(err.message);
            setResult(null);
        } else {
            console.error("An unknown error occurred.");
        }
      }
  };

  return (
      <Stack alignItems={'center'} justifyContent={'center'}width={'100vw'} gap={2}>
          <Typography variant='h3' color={'rgba(15, 64, 98, 1)'}>String Calculator</Typography>
          <TextField  
              value={input}
              onChange={(e) => setInput(e.target.value)}
              sx={{width: '20%'}}
              multiline
              placeholder="Enter numbers..."
          />
          <Button variant='contained' disabled={!input} onClick={handleCalculate}>Calculate</Button>
          {result && <Typography variant='body1'  color={'rgba(15, 64, 98, 1)'}>Result: {result}</Typography>}
          {error && <Typography variant='body1' style={{ color: 'red' }}>{error}</Typography>}
      </Stack>
  );
};

export default StringCalculator;
