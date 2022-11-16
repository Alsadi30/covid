import {useForm} from 'react-hook-form';
import ButtonInput from '../UI/ButtonInput';
import {Error} from '../UI/Error';
import TextInput from '../UI/TextInput';

const AddressForm = ({onSubmit}) => {
  const {register, handleSubmit, formState: {errors}} = useForm ();

  return (
    <div>
      <form style={{width: '518px'}} onSubmit={handleSubmit (onSubmit)}>

        <h3>Address</h3>

        <TextInput
          long
          {...register ('street_address', {
            required: 'Street Address is Required.',
          })}
          placeholder="Street Address"
          type="text"
        />
        {errors.street_address &&
          <Error>{errors.street_address.message}</Error>}

        <TextInput
          short
          {...register ('area', {required: 'Area is Required.'})}
          placeholder="Area"
          type="text"
        />
        {errors.area && <Error>Area is required</Error>}

        <TextInput
          short
          {...register ('city', {required: 'City is Required.'})}
          placeholder="City"
          type="text"
        />
        {errors.city && <Error>City is required</Error>}

        <TextInput
          short
          {...register ('country', {required: 'Country is Required.'})}
          placeholder="Country"
          type="text"
        />
        {errors.country && <Error>Country is required</Error>}

        <TextInput
          short
          {...register ('zip', {required: 'Zip is Required.'})}
          placeholder="Zip"
          type="number"
        />
        {errors.zip && <Error>Zip is required</Error>}

        <ButtonInput type="submit" value={`Confirm`} />
      </form>

    </div>
  );
};

export default AddressForm;
