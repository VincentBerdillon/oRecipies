import './styles.scss';

type InstructionsProps = {
  steps: string[];
}
function Instructions({ steps }: InstructionsProps) {
  return (
    <ol className="steps">
      {steps.map((instruction) => (
        <li key={instruction} className="step">
          {instruction}
        </li>
      ))}
    </ol>
  );
}

export default Instructions;
