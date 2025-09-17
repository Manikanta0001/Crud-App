import { useForm } from 'react-hook-form'

const PostForm = ({ onSubmit, defaultValues, submitText }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">Title</label>
        <input
          id="title"
          {...register('title', { required: 'Title is required' })}
          className="mt-1 block w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium">Body</label>
        <textarea
          id="body"
          {...register('body', { required: 'Body is required' })}
          rows="4"
          className="mt-1 block w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
        />
        {errors.body && <p className="text-red-500 text-sm">{errors.body.message}</p>}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {submitText}
      </button>
    </form>
  )
}

export default PostForm