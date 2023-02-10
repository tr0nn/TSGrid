import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import { useForm } from 'react-hook-form';
import ObjectProps from './ObjectProps';

/* register არის ფუნქცია რომელიც აბრუნებს ობიექტს */
/* პარამეტრად გადაეცემა input name რითიც ხდება input value დაჭერა */
// { required: true } დროს როდესავ ველი ცარიელია არ გაეშვება

/* handleSubmit(submit) არის ფია რომელიც აბრუნებს input მნიშვნელობების ობიექტს */

// watch() უყურებს name value და აბრუნებს რაც name ში წერია იმ წამს
export default function UseFormApp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const submit = data => {
    console.log('onSubmit მაშინ გაეშვება როცა ყველფერი კარგადაა - ' + data);
  };

  console.log(watch('name'));
  console.log('Errors :', errors.email);

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <input placeholder="surname" {...register('surname')} />
        <input
          placeholder="name"
          {...register('name', {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: 'მხოლოდ ასოები'
            }
          })}
        />
        <input
          placeholder="email"
          {...register('email', { required: true, maxLength: 5 })}
          // onFocus და onBlur გამოიყენება input მდგომარეობის გასაგებად
          onFocus={() => console.log('focused')}
          onBlur={() => console.log('blured')}
        />
        {errors.name && <p style={{ color: 'red' }}>{'ციფრები არ შეიძლება'}</p>}
        {errors.email && <p style={{ color: 'red' }}>{'Error heppend'}</p>}

        <button type="submit">register</button>
      </form>
      <ObjectProps />
    </div>
  );
}
