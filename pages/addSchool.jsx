// AddSchool.jsx

import { useForm } from 'react-hook-form';
import styles from './AddSchool.module.css';  // Importing an external CSS module

const AddSchool = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission, e.g., send data to the server or store locally
    console.log(data);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer}>
    <form className={styles.schoolForm} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.formLabel}>School Name</label>
      <input type="file" {...register('image', { required: 'Image is required' })} />
      <input className={styles.inputField}{...register('name', { required: 'School Name is required' })} />
      {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}

      <label className={styles.formLabel}>Address</label>
      <input {...register('address', { required: 'Address is required' })} />
      {errors.address && <p>{errors.address.message}</p>}

      <label className={styles.formLabel}>City</label>
      <input {...register('city', { required: 'City is required' })} />
      {errors.city && <p>{errors.city.message}</p>}

      <label className={styles.formLabel}>State</label>
      <input {...register('state', { required: 'State is required' })} />
      {errors.state && <p>{errors.state.message}</p>}

      <label className={styles.formLabel}>Contact</label>
      <input type="number" {...register('contact', { required: 'Contact is required' })} />
      {errors.contact && <p>{errors.contact.message}</p>}

      <label className={styles.formLabel}>Email</label>
      <input type="email" {...register('email_id', { required: 'Email is required', pattern: /^\S+@\S+$/i })} />
      {errors.email_id && <p>{errors.email_id.message}</p>}

      <label className={styles.formLabel}>Image</label>
      <input type="file" {...register('image', { required: 'Image is required' })} />
      {errors.image && <p>{errors.image.message}</p>}

      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
    </div>
    </div>
  );
};

export default AddSchool;
