// Calculate age from birthdate YYYY-MM-DD
export const calculateAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  let age: number = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};
