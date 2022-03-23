const useMetaError = (fieldState) => {
  const { invalid, error } = fieldState;
  const errorMessage = invalid && error.message;
  return {
    hasError: !!errorMessage,
    errorMessage,
  };
};

export default useMetaError;
