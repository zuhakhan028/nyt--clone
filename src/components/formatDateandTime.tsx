export function formatDateTime(dateTimeStr:string) {
    const date = new Date(dateTimeStr);  
    const formattedTime = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }); 
    const timezoneOffset = dateTimeStr.slice(-6);
    const timezoneAbbreviation = (timezoneOffset === "-04:00") ? "ET" : "Unknown";   
    return `${formattedTime} ${timezoneAbbreviation}`;
  }
  

  