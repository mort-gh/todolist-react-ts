import React, { useRef } from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handlerOnKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  };

  return (
    <div className='input-field mt2'>
      <input
        ref={ref}
        onKeyPress={handlerOnKeyPress}
        type='text'
        id='title'
        placeholder='Что сделать?'
      />
    </div>
  );
};
