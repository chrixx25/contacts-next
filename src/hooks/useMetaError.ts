const useMetaError = (
  fieldState
): { hasError: boolean; errorMessage: string } => {
  const { invalid, error } = fieldState;
  const errorMessage = invalid && error.message;
  return {
    hasError: !!errorMessage,
    errorMessage,
  };
};

export default useMetaError;
