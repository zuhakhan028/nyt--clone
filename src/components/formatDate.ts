export function formatDate(inputDate: any) {
  const options: any = { month: 'short', day: 'numeric', year: 'numeric' };
  
  const formattedDate = new Date(inputDate).toLocaleDateString('en-US', options);

  const parts = formattedDate.split(' ');

  const result = `${parts[0]}. ${parts[1]} ${parts[2]}`;
  
  return result;
}