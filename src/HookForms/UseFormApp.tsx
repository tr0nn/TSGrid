import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ObjectProps from './ObjectProps';

export default function UseFormApp() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form>
        <input placeholder="surname" />
        <input placeholder="name" />
        <input placeholder="email" />
        <button type="submit">register</button>
      </form>
      <ObjectProps />
    </div>
  );
}
