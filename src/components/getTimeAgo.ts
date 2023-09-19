export function getTimeAgo(dateString:string) {
    const currentDate :any= new Date();
    const pastDate:any = new Date(dateString);
    const timeDifference = Math.floor((currentDate - pastDate) / (60 * 1000)); 
  
    if (timeDifference < 60) {
      return `${timeDifference}m ago`;
    } else if (timeDifference < 1440) {
      const hoursAgo = Math.floor(timeDifference / 60);
      return `${hoursAgo}hr ago`;
    } else {
      const daysAgo = Math.floor(timeDifference / 1440);
      return `${daysAgo}day ago`;
    }
  }
  
 